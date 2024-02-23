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
  Trash,
  UserCircle,
  X
} from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { handleDelete } from "@/utils/pet";
import { useToast } from "@/components/ui/use-toast";

export function DeleteDialogComponent({ children, initialData, onGet }) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("@token:auth") : null;
  const { register, handleSubmit, setValue } = useForm();
  const { toast } = useToast()

  const inputProps = {
    className:
      "rounded-[10px] bg-transparent border-[3px] placeholder:text-grey"
  };

  useEffect(() => {
    if (initialData) {
      Object.entries(initialData).forEach(([field, value]) => {
        setValue(field, value);
      });
    }
  }, [initialData, setValue]);

  const onSubmit = async (formData) => {
    try {
      await handleDelete(formData, token, initialData.id);
      toast({
        description: "O Pet foi deletado com sucesso!"
      })
      await onGet()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="w-full h-full max-w-[668px] max-h-[611px] bg-transparent bg-[url('/bg-modal.svg')] border-none px-16 py-12  ">
        <div className="flex items-center">
          <Trash className="w-14 h-14 p-3 rounded-full bg-gradient-to-br from-[#00CAFC] to-[#0056E2]" />
          <h1 className="ml-6 font-bold text-[1.875rem]">Deletar</h1>
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
              {...register("name", { defaultValue: initialData?.name || "" })}
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
              {...register("ownerId", {
                defaultValue: initialData?.ownerId || ""
              })}
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
              {...register("race", { defaultValue: initialData?.race || "" })}
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
              {...register("phone", { defaultValue: initialData?.phone || "" })}
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
              {...register("birth", { defaultValue: initialData?.birth || "" })}
            />
          </div>
          <DialogClose asChild>
            <Button className="bg-white text-[#0056E2] rounded-[5px]">
              <ArrowLeftCircle className="mr-2 h-5 w-5 text-[#0056E2]" /> Voltar
            </Button>
          </DialogClose>
          <Button className="bg-red-500 rounded-[5px] flex items-center justify-center">
            <Trash className="mr-2 h-5 w-5"/> Deletar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
