import Image from "next/image";
import { Card } from "./card";
import { ChevronDown, CircleUserRound, UserCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { EditDialogComponent } from "@/app/components/dialog";
import { DeleteDialogComponent } from "@/app/components/dialog-delete";

export interface ICardAnimals {
  id: string;
  name: string;
  animal: "dog" | "cat";
  owner?: { name: string }; 
  race: string;
  phone: string;
  birth: string;
}


export default function CardAnimals({ animals, onGet }: { animals: ICardAnimals[], onGet: Promise<void> }) {
  const [openModalId, setOpenModalId] = useState<string | null>(null);

  const handleOpenModal = (animalId: string) => {
    setOpenModalId(animalId);
  };

  const handleCloseModal = () => {
    setOpenModalId(null);
  };

  return animals.map((animal) => (
    <div key={animal.id} className="relative">
      <div
        className="bg-gradient-to-br from-[#001E4D] to-[#000814] 
        w-full max-w-[300px] h-[100px] rounded-[10px] border-2 border-[#0000] gap-2 
        hover:cursor-pointer hover:border-2 hover:bg-[url('/bg-card-hover.svg')] bg-contain bg-no-repeat"
      >
        <Card
          className="w-full h-full flex gap-2 items-center justify-around border-none"
          onClick={() =>
            openModalId != null ? handleOpenModal() : handleOpenModal(animal.id)
          }
        >
          <Image
            src={animal.animal === "cat" ? "/cat-icon.svg" : "/dog-icon.svg"}
            alt={
              animal.animal === "cat" ? "Icone de gato" : "Icone de cachorro"
            }
            width={65}
            height={65}
            style={{
              objectFit: "contain"
            }}
            className="w-full h-full max-w-[65px] max-h-[65px]"
          />
          <div className="flex flex-col">
            <p className="flex items-center justify-between">
              <Image
                alt="icone de colar"
                src={"/collar-icon.svg"}
                width={0}
                height={0}
                className="w-full h-full max-w-4 max-h-4 mr-2"
              />
              {animal.name}
            </p>
            <p className="flex items-center justify-between">
              <UserCircle 
                className="w-full h-full max-w-4 max-h-4 mr-2"
              />
              {animal.owner?.name}
            </p>
          </div>
          <ChevronDown size={"20px"} />
        </Card>
      </div>

      {openModalId === animal.id && (
        <div
          className="bg-gradient-to-br to-[#000814] from-[#001E4D] w-full max-w-[300px] h-[216px] rounded-[10px] border-[3px] 
        p-4 border-[#00CAFC] gap-2 mt-2 flex flex-col shadow-2xl shadow-[#0056E233]"
        >
          <p>Raça: {animal.race}</p>
          <p>Telefone: {animal.phone}</p>
          <p>Idade: {animal.birth}</p>
          <EditDialogComponent initialData={animal} onGet={onGet}>
          <Button className="w-full bg-white rounded-[5px] text-blue-500">
            Editar
          </Button>
          </EditDialogComponent>
          <DeleteDialogComponent initialData={animal} onGet={onGet}>
          <Button className="w-full bg-gradient-to-r from-[#00CAFC] to-[#0056E2] rounded-[5px]">
            Remover
          </Button>
          </DeleteDialogComponent>
        </div>
      )}
    </div>
  ));
}
