import { Pet } from "@/types";

export const getPagesNumber = async () => {
  const response = await fetch("http://back:3000/pets/pages");
  if (!response.ok && response.body) {
    throw new Error(
      "Erro ao buscar número de páginas: " + response.body.toString()
    );
  }
  return (await response.json()) as number;
};

export const getPets = async (page: number) => {
  const response = await fetch(`http://back:3000/pets?page=${page}`, {
    cache: "no-store",
  });
  if (!response.ok && response.body) {
    throw new Error("Erro ao buscar pets: " + response.body.toString());
  }
  const pets = (await response.json()) as Pet[];
  return pets.map((pet) => ({
    ...pet,
    birthdate: new Date(pet.birthdate),
  }));
};
