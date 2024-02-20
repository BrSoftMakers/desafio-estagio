"use client"

import ArrowLeftIcon from "@/../public/assets/img/icons/blue-arrow-left.svg"
import EditIcon from "@/../public/assets/img/icons/sm-white-pencil.svg"
import Image from "next/image"
import { useModalContext } from "../../context/modalContext/index"
import Modal from "../Modal"
import Button from "../presentation/Button"

export default function EditModal() {
  const [editModalIsOpen, toggleEditModal] = useModalContext((s) => [
    s.editModalIsOpen,
    s.toggleEditModal
  ])

  return (
    <Modal.Root isOpen={editModalIsOpen} onClose={toggleEditModal}>
      <Modal.Header src={EditIcon} alt="edit icon" onClose={toggleEditModal}>
        Editar
      </Modal.Header>
      <Modal.Body>Hello</Modal.Body>
      <div className="mt-[66px] flex items-center justify-between">
        <Button height="md" width="lg">
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
    </Modal.Root>
  )
}
