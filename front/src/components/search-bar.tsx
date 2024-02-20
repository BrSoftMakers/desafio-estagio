import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export const SearchBar = () => {
  return (
    <div className="flex border-2 border-[#404a5c] border-solid rounded-lg w-full">
      <button className="flex justify-center items-center p-2 rounded-tl rounded-bl bg-[#404a5c]">
        <Image src="/search-icon.svg" alt="" width={20} height={20} />
      </button>
      <div className="p-1 flex w-full">
        <Input
          type="text"
          className="bg-transparent border-none outline-none text-white"
        />
        <Button className="bg-[#404a5c] py-0">Pesquisar</Button>
      </div>
    </div>
  );
};
