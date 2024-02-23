"use client";

import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updatePet } from "@/lib/actions";
import { PetsContext } from "@/lib/contexts";
import { cn, formatToPhone } from "@/lib/utils";
import { Pet } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Dispatch, PropsWithChildren, SetStateAction, useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const formSchema = z.object({
  name: z.string().min(1, "Nome do pet é obrigatório"),
  type: z.enum(["cat", "dog"]),
  owner: z.string().min(1, "Nome do dono é obrigatório"),
  breed: z.string().min(1, "Raça do pet é obrigatória"),
  birthdate: z.date({
    required_error: "Informe uma data de nascimento",
  }),
  phone: z.string().regex(/^\(\d{2}\)\s9\s\d{4}-\d{4}$/, {
    message: "Telefone inválido (insira no formato (00) 0 0000-0000)",
  }),
});

export const UpdateForm = ({
  children,
  setDialogOpen,
  petData,
}: PropsWithChildren<{
  setDialogOpen: Dispatch<SetStateAction<boolean>>;
  petData: Pet;
}>) => {
  const router = useRouter();
  const { pets, setPets } = useContext(PetsContext);
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") ?? "1";

  const { id, ...petInitialData } = petData;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...petInitialData,
    },
  });

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    form.reset();
    setDialogOpen(false);
    if (id === undefined) throw new Error("Id do pet não foi providenciado");
    const wasUpdated = await updatePet(value, id);
    if (!wasUpdated) return;
    if (pets.length === 16)
      return router.push(`?page=${parseInt(currentPage) + 1}`);
    setPets((prev) =>
      prev.map((pet) => (pet.id === id ? { ...value, id } : pet))
    );
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full grid gap-4 grid-cols-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-1">
                <Image src="/pet-name.svg" alt="" width={16} height={16} />
                <span>Nome</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Nome Sobrenome"
                  className="bg-transparent border-[#404A5C] border-solid border-4"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-1">
                <Image src="/breed-icon.svg" alt="" width={9.96} height={16} />
                <span>Animal</span>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-2 gap-2"
                >
                  <FormItem
                    className={clsx(
                      "h-full flex items-center gap-1 p-1 py-2 border-solid border-[#404A5C] border-4 rounded-lg space-y-0",
                      {
                        "border-white": field.value === "cat",
                      }
                    )}
                  >
                    <FormControl>
                      <RadioGroupItem
                        value="cat"
                        className={clsx("border-white text-white", {
                          "bg-white": field.value === "cat",
                        })}
                      />
                    </FormControl>
                    <FormLabel>Gato</FormLabel>
                  </FormItem>
                  <FormItem
                    className={clsx(
                      "h-full flex items-center gap-1 p-1 py-2 border-solid border-[#404A5C] border-4 rounded-lg space-y-0",
                      {
                        "border-white": field.value === "dog",
                      }
                    )}
                  >
                    <FormControl>
                      <RadioGroupItem
                        value="dog"
                        className={clsx("border-white text-white", {
                          "bg-white": field.value === "dog",
                        })}
                      />
                    </FormControl>
                    <FormLabel>Cachorro</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="owner"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-1">
                <Image src="/owner-name.svg" alt="" width={16} height={16} />
                <span>Dono</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Nome Sobrenome"
                  className="bg-transparent border-[#404A5C] border-solid border-4"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="breed"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-1">
                <Image src="/breed-icon.svg" alt="" width={9.96} height={16} />
                <span>Raça</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Raça"
                  className="bg-transparent border-[#404A5C] border-solid border-4"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field: { onChange, ...rest } }) => (
            <FormItem>
              <FormLabel className="flex gap-1">
                <Image src="/phone.svg" alt="" width={16} height={16} />
                <span>Telefone</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="(00) 0 0000-0000"
                  className="bg-transparent border-[#404A5C] border-solid border-4"
                  {...rest}
                  onChange={(e) => {
                    e.target.value = formatToPhone(e.target.value);
                    onChange(e);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="birthdate"
          render={({ field }) => (
            <FormItem className="flex gap-1 flex-col space-y-0">
              <FormLabel className="flex items-center gap-1">
                <Image src="/callendar.svg" alt="" width={14.4} height={16} />
                <span>Nascimento</span>
                <span className="text-sm text-[#404A5C]">(Aproximado)</span>
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "bg-transparent border-[#404A5C] border-solid border-4 pl-3 text-left font-normal hover:bg-transparent hover:text-white",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "dd/MM/yyyy")
                      ) : (
                        <span>Escolha uma data</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                    className="bg-[#001E4D] border-[#404A5C] border-solid border-4"
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        {children}
        <Button
          type="submit"
          className="flex items-center gap-1 font-bold bg-gradient-to-r from-[#00CAFC] to-[#0056E2]"
        >
          <Image src="/white-pen.svg" alt="" width={16.36} height={16.36} />
          <span className="font-bold text-white">Salvar</span>
        </Button>
      </form>
    </Form>
  );
};
