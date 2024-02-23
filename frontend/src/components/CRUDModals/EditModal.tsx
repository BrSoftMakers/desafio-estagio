"use client"

import ArrowLeftIcon from "@/../public/assets/img/icons/blue-arrow-left.svg"
import EditIcon from "@/../public/assets/img/icons/sm-white-pencil.svg"
import PetService from "@/services/pet"
import { PetSchema } from "@/types/zod/PetSchema"
import Image from "next/image"
import { useModalContext } from "../../context/modalContext/index"
import Form from "../Form"
import Modal from "../Modal"
import Button from "../presentation/Button"
import { revalidateFetch } from "./actions"

export default function EditModal() {
  const [currentPet, editModalIsOpen, closeEditModal] = useModalContext((s) => [
    s.currentPet,
    s.editModalIsOpen,
    s.closeEditModal
  ])

  const onSubmit = async (form: PetSchema) => {
    const res = await PetService.edit(currentPet.id, form)
    if (res.data) {
      revalidateFetch("get-all-pets")
      closeEditModal()
    } else {
      window.alert(res.message)
    }
  }

  return (
    <Modal.Root isOpen={editModalIsOpen} onClose={closeEditModal}>
      <Modal.Header src={EditIcon} alt="edit icon" onClose={closeEditModal}>
        Editar
      </Modal.Header>
      <Form onSubmit={onSubmit} defaultValues={currentPet}>
        <div className="mt-[66px] flex items-center justify-between">
          <Button
            height="md"
            width="lg"
            onClick={(e) => {
              e.preventDefault()
              closeEditModal()
            }}
          >
            <Image src={ArrowLeftIcon} alt="arrow left icon" />
            <span className="bg-gradient-to-r from-light_blue to-default_blue bg-clip-text font-bold text-transparent">
              Voltar
            </span>
          </Button>
          <Button height="md" width="lg" variant="info">
            <Image src={EditIcon} alt="pencil icon" />
            Salvar
          </Button>
        </div>
      </Form>
    </Modal.Root>
  )
}
