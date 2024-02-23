import { Pet, PetDTO } from "@/types";

export const getPagesNumber = async () =>
  fetch("http://localhost:3000/pets/pages").then((response) => {
    if (!response.ok && response.body) {
      throw new Error(
        "Erro ao buscar número de páginas: " + response.body.toString()
      );
    }
    return response.json().then((data: number) => (data === 0 ? 1 : data));
  });

export const getPets = async (page: number) =>
  fetch(`http://localhost:3000/pets?page=${page}`).then((response) => {
    if (!response.ok && response.body) {
      throw new Error("Erro ao buscar pets: " + response.body.toString());
    }
    return response.json().then(
      (pets: PetDTO[]) =>
        pets.map((pet) => ({
          ...pet,
          birthdate: new Date(pet.birthdate),
        })) as Pet[]
    );
  });
