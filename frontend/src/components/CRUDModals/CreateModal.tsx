"use client"

import CreateIcon from "@/../public/assets/img/icons/add.svg"
import ArrowLeftIcon from "@/../public/assets/img/icons/blue-arrow-left.svg"
import Image from "next/image"
import { useModalContext } from "../../context/modalContext/index"
import Modal from "../Modal"
import Button from "../presentation/Button"

export default function CreateModal() {
  const [createModalIsOpen, toggleCreateModal] = useModalContext((s) => [
    s.createModalIsOpen,
    s.toggleCreateModal
  ])

  return (
    <Modal.Root isOpen={createModalIsOpen} onClose={toggleCreateModal}>
      <Modal.Header
        src={CreateIcon}
        alt="create icon"
        onClose={toggleCreateModal}
      >
        Cadastrar
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
          <Image src={CreateIcon} alt="create icon" />
          Cadastrar
        </Button>
      </div>
    </Modal.Root>
  )
}
