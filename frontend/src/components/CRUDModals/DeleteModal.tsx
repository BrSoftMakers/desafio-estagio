"use client"

import ArrowLeftIcon from "@/../public/assets/img/icons/blue-arrow-left.svg"
import DeleteIcon from "@/../public/assets/img/icons/trash.svg"
import Image from "next/image"
import { useModalContext } from "../../context/modalContext/index"
import Modal from "../Modal"
import Button from "../presentation/Button"

export default function DeleteModal() {
  const [deleteModalIsOpen, toggleDeleteModal] = useModalContext((s) => [
    s.deleteModalIsOpen,
    s.toggleDeleteModal
  ])

  return (
    <Modal.Root isOpen={deleteModalIsOpen} onClose={toggleDeleteModal}>
      <Modal.Header
        src={DeleteIcon}
        alt="trash icon"
        onClose={toggleDeleteModal}
      >
        Remover
      </Modal.Header>
      <Modal.Body>Hello</Modal.Body>
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
    </Modal.Root>
  )
}
