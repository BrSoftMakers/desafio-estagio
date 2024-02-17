import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function InputSearch() {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className=" w-full bg-transparent border-2 rounded-[10px] h-12 outline-none pl-12"
      />
      <div className="absolute h-full left-0 top-0 flex items-center justify-center">
        <div className="w-[44px] h-[44px] bg-grey flex items-center justify-center rounded-l-[5px]">
          <Search color="#001E4D" />
        </div>
      </div>
      <div className="absolute right-[7px] top-0 h-full flex items-center">
        <Button
          variant={"outline"}
          className="bg-greyborder-none rounded-[5px] bg-[#404A5C] hover:bg-[#404A5C]"
        >
          Pesquisar
        </Button>
      </div>
    </div>
  );
}
