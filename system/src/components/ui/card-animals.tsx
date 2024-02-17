import Image from "next/image";
import { Card } from "./card";
import { ChevronDown, CircleUserRound } from "lucide-react";

interface ICardAnimals {
  id: string;
  name: string;
  animal: "dog" | "cat";
  owner: string;
  race: string;
  phone: string;
  birth: string;
}

export default function CardAnimals({ animals }: { animals: ICardAnimals[] }) {
  return animals.map((animal) => (
    <Card
      key={animal.id}
      className="bg-gradient-to-br from-[#001E4D] to-[#000814] 
      w-full max-w-[300px] h-[95px] rounded-[10px] border-2 p-2 border-[#0000] flex 
      items-center justify-around gap-2 hover:cursor-pointer hover:border-2 
      hover:bg-[url('/bg-card-hover.svg')] bg-contain bg-no-repeat"
    >
      <Image
        src={animal.animal === "cat" ? "/cat-icon.svg" : "/dog-icon.svg"}
        alt={animal.animal === "cat" ? "Icone de gato" : "Icone de cachorro"}
        width={65}
        height={65}
        style={{
          objectFit: "contain",
        }}
        className="w-full h-full max-w-[65px] max-h-[65px]"
      />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <Image
            src={"collar-icon.svg"}
            alt="Icone de coleira"
            width={0}
            height={0}
            className="w-full h-full max-w-[16px] max-h-[16px]"
          />
          <p>{animal.name}</p>
        </div>
        <div className="flex items-center gap-2">
          <CircleUserRound size={"16px"} />
          <p>{animal.owner}</p>
        </div>
      </div>
      <ChevronDown size={"20px"} />
    </Card>
  ));
}
