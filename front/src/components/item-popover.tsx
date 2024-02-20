import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const ItemPopover = ({
  name,
  type,
  owner,
  breed,
  birthdate,
}: {
  name: string;
  type: "cat" | "dog";
  owner: string;
  breed: string;
  birthdate: string;
}) => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex  justify-between items-center p-4 rounded-lg bg-gradient-to-tl from-[15.31%] from-[#000814] to-[#001e4d] to-[85.58%]">
          <div className='flex items-center gap-4'>
            <div className="bg-gradient-to-r from-[#00CAFC] to-[#0056E2] w-[65px] h-[65px] flex justify-center items-center rounded-full">
              <Image
                src={`${type}.svg`}
                alt={`${type} icon`}
                height={type === "cat" ? 43.52 : 35.55}
                width={35.65}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className='flex gap-2'>
                <Image src="/pet-name.svg" alt="" height={16} width={16} />
                <h3 className="text-white">{name}</h3>
              </div>
              <div className='flex gap-2'>
                <Image src="/owner-name.svg" alt="" height={16} width={16} />
                <h3 className="text-white">{owner}</h3>
              </div>
            </div>
          </div>
          <Image src='/arrow.svg' alt='' height={20} width={11.52} />
        </div>
      </PopoverTrigger>
      <PopoverContent></PopoverContent>
    </Popover>
  );
};
