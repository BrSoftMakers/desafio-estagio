import PetRole from "@/enums/ePetRole"

export default interface iPet {
  id: number
  name: string
  animal: PetRole
  breed: string
  ownerName: string
  ownerPhone: string
  dateOfBirth: string
}
