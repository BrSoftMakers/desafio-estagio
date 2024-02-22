"use server";

import { Pet, PetDTO } from "@/types";
import { revalidatePath } from "next/cache";

export const createPet = async (pet: Pet) => {
  const petJson = JSON.stringify(pet);
  const response = await fetch("http://back:3000/pets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: petJson,
  });
  if (!response.ok && response.body) {
    throw new Error("Erro ao cadastrar pet: " + response.body.toString());
  }
  revalidatePath("/");
  const newPet = (await response.json()) as PetDTO;
  return {
    ...newPet,
    birthdate: new Date(newPet.birthdate),
  };
};

export const updatePet = async (pet: Pet, id: number) => {
  const petJson = JSON.stringify(pet);
  const response = await fetch(`http://back:3000/pets/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: petJson,
  });
  if (!response.ok) {
    const errorMessage = await response.json();
    throw new Error("Erro ao atualizar pet: " + errorMessage);
  }
  revalidatePath("/");
  return true;
};

export const deletePet = async (id: number) => {
  const response = await fetch(`http://back:3000/pets/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const errorMessage = await response.json();
    throw new Error("Erro ao deletar pet: " + errorMessage);
  }
  revalidatePath("/");
  return true;
};
