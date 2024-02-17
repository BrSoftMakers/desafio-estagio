"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle, ArrowRightCircle, PlusCircle } from "lucide-react";
import Logo from "@/components/ui/logo";
import ContentAnimals from "./components/content-animals";
import InputSearch from "./components/input-search";

export default function Home() {
  const [pagination, setPagination] = useState<number>(1);

  const handleIncrementPagination = () => {
    setPagination(pagination + 1);
  };
  const handleDecrementPagination = () => {
    setPagination(pagination === 1 ? 1 : pagination - 1);
  };

  return (
    <div className="w-full h-full relative py-7 px-14">
      <Logo />
      <div className="flex items-center gap-5 mt-7 mb-7">
        <InputSearch />
        <Button className="bg-gradient-to-r from-[#00CAFC] to-[#0056E2] w-[156px] h-12 rounded-[10px]">
          <PlusCircle className="mr-2 h-5 w-5" /> Cadastrar
        </Button>
      </div>
      <ContentAnimals />
      <div className="w-full flex items-center pt-1 justify-end">
        <Button
          className="hover:cursor-pointer"
          onClick={handleDecrementPagination}
          disabled={pagination === 1 ? true : false}
        >
          <ArrowLeftCircle />
        </Button>
        <p>{pagination} de 365</p>
        <Button
          className="hover:cursor-pointer"
          onClick={handleIncrementPagination}
        >
          <ArrowRightCircle />
        </Button>
      </div>
    </div>
  );
}
