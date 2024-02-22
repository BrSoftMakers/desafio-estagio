"use server"

import { PetSchema } from "@/types/zod/PetSchema"
import fetchData from "@/utils/fetchData"

export default async function edit(id: number, pet: PetSchema) {
  try {
    const res = await fetchData(`${process.env.BASE_URL_API}/pets/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pet)
    })
    return await res.json()
  } catch (error) {
    return error
  }
}
