"use client";

import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  PlusCircle,
  SearchIcon
} from "lucide-react";
import Logo from "@/components/ui/logo";
import ContentAnimals from "./components/content-animals";
import InputSearch from "./components/input-search";
import { CreatePetDialog } from "@/app/(auth)/home/components/create-dialog";
import { handleGetAll } from "@/utils/pet";
import { AuthContext } from "@/context/auth";
import { useToast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";

const TOKEN_KEY = "@token:auth";

export default function Home() {
  const [pagination, setPagination] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);
  const [atualizatePage, setAtualizatePage] = useState<boolean>(false);
  const [pets, setPets] = useState([]);
  const token =
    typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;
  const { logout } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    if (atualizatePage) {
      redirect("/");
    }
  }, [atualizatePage]);

  const handleIncrementPagination = () => {
    setPagination((prev) => (prev === maxPage ? prev : prev + 1));
  };

  const handleDecrementPagination = () => {
    setPagination((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const handleLogout = async () => {
    try {
      await logout();
      setAtualizatePage(true);
      redirect("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleGetAllPets = async () => {
    try {
      const [petsData, totalPages] = await handleGetAll(token, pagination);
      setMaxPage(totalPages);
      setPets(petsData);
    } catch (error) {
      console.error("Error fetching pets:", error);

      if (error.response) {
          console.log(error.response.data.message[0])
      } else {
        toast({
          description: "Saiu com sucesso"
        });
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await handleGetAllPets();
    };

    fetchData();
  }, [pagination, token]);

  return (
    <div className="w-full h-full relative py-7 px-14">
      <div className="w-full flex items-center max-sm:flex-col">
        <Logo />
        <Button
          className="border-2 border-slate-500 rounded-[10px] ml-auto"
          onClick={handleLogout}
        >
          Sair
        </Button>
      </div>
      <div className="flex items-center gap-5 mt-7 mb-7 max-sm:flex-col">
        <InputSearch>
          <Button className="bg-grey border-none rounded-[5px] bg-[#404A5C] hover:bg-[#404A5C]">
            <p className="hidden sm:block">Pesquisar</p>
            <div className="block sm:hidden">
              <SearchIcon />
            </div>
          </Button>
        </InputSearch>
        <CreatePetDialog onGetAll={handleGetAllPets}>
          <div className="bg-gradient-to-r from-[#00CAFC] to-[#0056E2] w-[156px] h-12 rounded-[10px] flex items-center justify-center">
            <PlusCircle className="mr-2 h-5 w-5" /> Cadastrar
          </div>
        </CreatePetDialog>
      </div>
      <ContentAnimals animals={pets} onGet={handleGetAllPets} />
      <div className="w-full flex items-center pt-1 justify-end">
        <Button
          className="hover:cursor-pointer"
          onClick={handleDecrementPagination}
          disabled={pagination === 1}
        >
          <ArrowLeftCircle />
        </Button>
        <p>
          {pagination} de {maxPage}
        </p>
        <Button
          className="hover:cursor-pointer"
          onClick={handleIncrementPagination}
          disabled={pagination === maxPage}
        >
          <ArrowRightCircle />
        </Button>
      </div>
    </div>
  );
}
