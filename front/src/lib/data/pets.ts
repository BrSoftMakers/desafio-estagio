import { Pet, PetDTO } from "@/types";

export const getPagesNumber = async (search: string = "") =>
  fetch(`http://localhost:3000/pets/pages?search=${search}`).then(
    (response) => {
      if (!response.ok && response.body) {
        throw new Error(
          "Erro ao buscar número de páginas: " + response.body.toString()
        );
      }
      return response.json().then((data: number) => (data === 0 ? 1 : data));
    }
  );

export const getPets = async (page: number = 1, search: string = "") =>
  fetch(`http://localhost:3000/pets?page=${page}&search=${search}`).then(
    (response) => {
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
    }
  );
