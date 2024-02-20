import { create } from "zustand"

type iModalContext = {
  createModalIsOpen: boolean
  editModalIsOpen: boolean
  deleteModalIsOpen: boolean
  toggleCreateModal: () => void
  toggleEditModal: () => void
  toggleDeleteModal: () => void
}

export const useModalContext = create<iModalContext>()((set) => ({
  // States
  createModalIsOpen: false,
  editModalIsOpen: false,
  deleteModalIsOpen: false,

  // Actions
  toggleCreateModal: () => {
    set((state) => ({ createModalIsOpen: !state.createModalIsOpen }))
  },
  toggleEditModal: () => {
    set((state) => ({ editModalIsOpen: !state.editModalIsOpen }))
  },
  toggleDeleteModal: () => {
    set((state) => ({ deleteModalIsOpen: !state.deleteModalIsOpen }))
  }
}))
