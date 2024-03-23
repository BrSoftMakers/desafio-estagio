"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ubuntu } from "@/fonts/ubuntu";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export const SearchBar = () => {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") ?? "1";
  const currentSearch = searchParams.get("search") ?? "";

  const [name, setName] = useState(currentSearch);
  return (
    <div className="flex border-2 border-[#404a5c] border-solid rounded-lg w-full">
      <button className="flex justify-center items-center p-2 rounded-tl rounded-bl bg-[#404a5c]">
        <Image src="/search-icon.svg" alt="" width={20} height={20} />
      </button>
      <div className="p-1 flex w-full">
        <Input
          type="text"
          className={`bg-transparent border-none outline-none text-white ${ubuntu.className}`}
          onChange={(e) => setName(e.target.value)}
        />
        <Link href={`?page=${currentPage}&search=${name}`}>
          <Button className={`bg-[#404a5c] py-0 ${ubuntu.className}`}>
            Pesquisar
          </Button>
        </Link>
      </div>
    </div>
  );
};
