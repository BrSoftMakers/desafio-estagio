import PetRole from "@/enums/ePetRole"
import iPet from "@/types/iPet"
import { create } from "zustand"

type iModalContext = {
  currentPet: iPet
  createModalIsOpen: boolean
  editModalIsOpen: boolean
  deleteModalIsOpen: boolean
  closeCreateModal: () => void
  openCreateModal: () => void
  closeEditModal: () => void
  openEditModal: (pet: iPet) => void
  closeDeleteModal: () => void
  openDeleteModal: (pet: iPet) => void
}

export const useModalContext = create<iModalContext>()((set) => ({
  // States
  currentPet: {
    id: 0,
    name: "",
    ownerName: "",
    ownerPhone: "",
    animal: PetRole.DOG,
    breed: "",
    dateOfBirth: new Date().toISOString().substring(0, 10)
  },
  createModalIsOpen: false,
  editModalIsOpen: false,
  deleteModalIsOpen: false,

  // Actions
  openCreateModal: () => {
    set(() => ({ createModalIsOpen: true }))
  },
  closeCreateModal: () => {
    set(() => ({ createModalIsOpen: false }))
  },
  openEditModal: (pet) => {
    set(() => ({ editModalIsOpen: true, currentPet: pet }))
  },
  closeEditModal: () => {
    set(() => ({ editModalIsOpen: false }))
  },
  openDeleteModal: (pet) => {
    set(() => ({ deleteModalIsOpen: true, currentPet: pet }))
  },
  closeDeleteModal: () => {
    set(() => ({ deleteModalIsOpen: false }))
  }
}))
