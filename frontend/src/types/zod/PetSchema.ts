import PetRole from "@/enums/ePetRole"
import { z } from "zod"

export const zodPetSchema = z.object({
  name: z.string(),
  animal: z.nativeEnum(PetRole),
  breed: z.string(),
  ownerName: z.string(),
  ownerPhone: z.string(),
  dateOfBirth: z.string().transform((str) => new Date(str).toISOString())
})

export type PetSchema = z.infer<typeof zodPetSchema>
