"use client";

import { PetsContext } from "@/lib/contexts";
import { getPets } from "@/lib/data";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { ItemPopover } from "./item-popover";

export const PetsGrid = () => {
  const { pets, setPets } = useContext(PetsContext);

  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page")
    ? parseInt(searchParams.get("page")!)
    : 1;

  const getPetsFunction = getPets.bind(null, currentPage);
  const { isPending, error, data } = useQuery({
    queryKey: ["pets", currentPage],
    queryFn: getPetsFunction,
  });

  useEffect(() => {
    if (data) setPets(data);
  }, [data, setPets]);

  if (isPending) return <p className="text-center text-white">Carregando...</p>;
  if (error)
    return <p className="text-center text-white">Erro: {error.message}</p>;

  return (
    <main className="grid grid-cols-4 grid-rows-4 gap-4">
      {pets.map((pet, index) => (
        <ItemPopover {...pet} key={index} />
      ))}
    </main>
  );
};
