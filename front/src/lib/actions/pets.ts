"use server";

import { Pet } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
  redirect("/");
};
