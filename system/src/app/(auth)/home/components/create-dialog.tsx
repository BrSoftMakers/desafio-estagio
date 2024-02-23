import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  ArrowLeftCircle,
  Calendar,
  PhoneCall,
  PlusCircle,
  UserCircle,
  X
} from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { handlePetCreate } from "@/utils/pet";
import { useToast } from "@/components/ui/use-toast";

interface CreatePetDialogProps {
  children: React.ReactNode;
  onGetAll: () => void;
}

export function CreatePetDialog({ children, onGetAll }: CreatePetDialogProps) {
  const TOKEN_KEY = "@token:auth";
  const token = typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;
  const { register, handleSubmit } = useForm();
  const [date, setDate] = useState<Date>();
  const { toast } = useToast();

  const inputProps = {
    className: "rounded-[10px] bg-transparent border-[3px] placeholder:text-grey"
  };

  const onSubmit = async (formData: any) => {
    try {
      await handlePetCreate(formData, token);
      onGetAll();
      toast({
        description: "Pet criado com sucesso!"
      });
    } catch (error) {
      console.error("Error creating pet:", error);
      let errorMessage = "An error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      }
      toast({
        description: errorMessage,
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="w-full h-full max-w-[668px] max-h-[611px] bg-transparent bg-[url('/bg-modal.svg')] border-none px-16 py-12">
        <div className="flex items-center">
          <PlusCircle className="w-14 h-14 p-3 rounded-full bg-gradient-to-br from-[#00CAFC] to-[#0056E2]" />
          <h1 className="ml-6 font-bold text-[1.875rem]">Cadastrar</h1>
          <DialogClose asChild className="ml-auto hover:cursor-pointer">
            <X />
          </DialogClose>
        </div>
        <form
          className="grid grid-rows-4 grid-cols-2 gap-3 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="flex items-center mb-2">
              <Image
                alt=""
                src={"collar-icon.svg"}
                width={0}
                height={0}
                className="w-full h-full max-w-[16px] max-h-[16px] mr-2"
              />
              Nome
            </label>
            <Input
              type="text"
              placeholder="Nome e Sobrenome"
              {...inputProps}
              {...register("name")}
            />
          </div>
          <div className="">
            <label className="flex items-center mb-2">
              <Image
                alt=""
                src={"genetic-icon.svg"}
                width={0}
                height={0}
                className="w-full h-full max-w-[16px] max-h-[16px] mr-2"
              />
              Animal
            </label>
            <div className="flex justify-around">
              <div className="flex justify-around flex-row-reverse items-center border-[3px] checked:border-white rounded-[10px] w-full max-w-[111px] max-h-[39px]">
                <label className="text-[1rem]">Cachorro</label>
                <Input
                  type="radio"
                  {...register("animal")}
                  className="w-[12px] h-12px"
                  value="dog"
                />
              </div>
              <div className="flex justify-end gap-[3px] flex-row-reverse items-center border-[3px] rounded-[10px] w-full max-w-[111px] max-h-[39px]">
                <label className="text-[1rem]">Gato</label>
                <Input
                  type="radio"
                  {...register("animal")}
                  className="w-[12px] h-12px"
                  value="cat"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="flex items-center mb-2">
              <UserCircle className="w-full h-full max-w-[16px] max-h-[16px] mr-2" />
              Dono
            </label>
            <Input
              type="text"
              placeholder="email"
              {...inputProps}
              {...register("ownerId")}
            />
          </div>
          <div>
            <label className="flex items-center mb-2">
              <Image
                alt=""
                src={"genetic-icon.svg"}
                width={0}
                height={0}
                className="w-full h-full max-w-[16px] max-h-[16px] mr-2"
              />
              Raça
            </label>
            <Input
              type="text"
              placeholder="Raça"
              {...inputProps}
              {...register("race")}
            />
          </div>
          <div>
            <label className="flex items-center mb-2">
              <PhoneCall className="w-full h-full max-w-[16px] max-h-[16px] mr-2" />
              Telefone
            </label>
            <Input
              type="tel"
              placeholder="Número de Telefone"
              {...inputProps}
              {...register("phone")}
            />
          </div>
          <div>
            <label className="flex items-center mb-2">
              <Calendar className="w-full h-full max-w-[16px] max-h-[16px] mr-2" />
              Data de Nascimento
            </label>
            <Input
              type="date"
              placeholder="Nome e Sobrenome"
              {...inputProps}
              {...register("birth")}
            />
          </div>
          <DialogClose asChild>
            <Button className="w-full bg-white text-[#0056E2] rounded-[5px]">
              <ArrowLeftCircle className="mr-2 h-5 w-5 text-[#0056E2]" /> Voltar
            </Button>
          </DialogClose>
          <Button className="w-full bg-gradient-to-r from-[#00CAFC] to-[#0056E2] rounded-[5px] flex items-center justify-center">
            <DialogClose className="flex items-center">
              <PlusCircle className="mr-2 h-5 w-5" /> Cadastrar
            </DialogClose>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
