import { ubuntu } from "@/fonts/ubuntu";
import { PetDTO } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const ItemPopover = ({
  name,
  type,
  owner,
  breed,
  birthdate,
  phone,
}: PetDTO) => {
  const [isOpen, setIsOpen] = useState(false);

  const calculateAge = () => {
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    const month = today.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
      return age - 1;
    }
    return age;
  };

  return (
    <Popover onOpenChange={(isOpen) => setIsOpen(isOpen)}>
      <PopoverTrigger
        className={clsx(
          "box-border bg-gradient-to-r hover:from-[#00CAFC] hover:to-[#0056E2]  p-0.5 rounded-lg",
          { "from-[#00CAFC] to-[#0056E2]": isOpen }
        )}
      >
        <div className="flex justify-between items-center p-4 rounded-lg bg-gradient-to-tl from-[15.31%] from-[#000814] to-[#001e4d] to-[85.58%]">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-[#00CAFC] to-[#0056E2] w-[65px] h-[65px] flex justify-center items-center rounded-full">
              <Image
                src={`${type}.svg`}
                alt={`${type} icon`}
                height={type === "cat" ? 43.52 : 35.55}
                width={35.65}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Image src="/pet-name.svg" alt="" height={16} width={16} />
                <h3 className={`text-white ${ubuntu.className}`}>{name}</h3>
              </div>
              <div className="flex gap-2">
                <Image src="/owner-name.svg" alt="" height={16} width={16} />
                <h3 className={`text-white ${ubuntu.className}`}>{owner}</h3>
              </div>
            </div>
          </div>
          <Image
            src="/arrow.svg"
            alt=""
            height={20}
            width={11.52}
            className={clsx({
              "rotate-180": isOpen,
            })}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="relative bg-gradient-to-r from-[#00CAFC] to-[#0056E2] p-0.5 rounded-lg 
                                  before:absolute before:inset-0 before:h-full before:w-full 
                                  before:bg-gradient-to-r before:from-[#00CAFC] before:to-[#0056E2] before:blur-lg before:z-[-1]"
      >
        <div className="flex flex-col justify-between items-center p-4 gap-2 rounded-lg bg-gradient-to-tl from-[15.31%] from-[#000814] to-[#001e4d] to-[85.58%] text-white">
          <div className="flex justify-start items-center w-full gap-2">
            <Image src="/breed-icon.svg" alt="" width={9.96} height={16} />
            <span>Raça: {breed}</span>
          </div>
          <div className="flex justify-start items-center w-full gap-2">
            <Image src="/phone.svg" alt="" width={16} height={16} />
            <span>Telefone: {phone}</span>
          </div>
          <div className="flex justify-start items-center w-full gap-2">
            <Image src="/callendar.svg" alt="" width={14.4} height={16} />
            <span>Idade: {calculateAge()}</span>
          </div>
          <Button className="flex justify-center gap-1 w-full bg-white">
            <Image src="/pen.svg" alt="" width={16} height={16} />
            <span className="font-bold bg-gradient-to-r from-[#00CAFC] to-[#0056E2] text-transparent bg-clip-text">
              Editar
            </span>
          </Button>
          <Button className="flex justify-center gap-1 w-full bg-gradient-to-r from-[#00CAFC] to-[#0056E2] text-white">
            <Image src="/trash-icon.svg" alt="" width={14.55} height={16} />
            <span className="font-bold">Remover</span>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
