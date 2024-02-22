"use client"

import ArrowLeftIcon from "@/../public/assets/img/icons/blue-arrow-left.svg"
import DeleteIcon from "@/../public/assets/img/icons/trash.svg"
import PetService from "@/services/pet"
import Image from "next/image"
import { useModalContext } from "../../context/modalContext/index"
import Form from "../Form"
import Modal from "../Modal"
import Button from "../presentation/Button"
import { revalidateFetch } from "./actions"

export default function DeleteModal() {
  const [currentPet, deleteModalIsOpen, closeDeleteModal] = useModalContext(
    (s) => [s.currentPet, s.deleteModalIsOpen, s.closeDeleteModal]
  )

  const onSubmit = async () => {
    const res = await PetService.remove(currentPet.id)
    if (res) {
      revalidateFetch("get-all-pets")
      closeDeleteModal()
    }
  }

  return (
    <Modal.Root isOpen={deleteModalIsOpen} onClose={closeDeleteModal}>
      <Modal.Header
        src={DeleteIcon}
        alt="trash icon"
        onClose={closeDeleteModal}
      >
        Remover
      </Modal.Header>
      <Form onSubmit={onSubmit} defaultValues={currentPet} disabled>
        <div className="mt-[66px] flex items-center justify-between">
          <Button height="md" width="lg">
            <Image src={ArrowLeftIcon} alt="arrow left icon" />
            <span className="bg-gradient-to-r from-light_blue to-default_blue bg-clip-text font-bold text-transparent">
              Voltar
            </span>
          </Button>
          <Button height="md" width="lg" variant="danger">
            <Image src={DeleteIcon} alt="trash icon" />
            Remover
          </Button>
        </div>
      </Form>
    </Modal.Root>
  )
}
