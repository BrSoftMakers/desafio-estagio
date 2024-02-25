"use client"

import CreateIcon from "@/../public/assets/img/icons/add.svg"
import ArrowLeftIcon from "@/../public/assets/img/icons/blue-arrow-left.svg"
import PetService from "@/services/pet"
import { PetSchema } from "@/types/zod/PetSchema"
import Image from "next/image"
import { useModalContext } from "../../context/modalContext/index"
import Form from "../Form"
import Modal from "../Modal"
import Button from "../presentation/Button"
import { revalidateFetch } from "./actions"

export default function CreateModal() {
  const [createModalIsOpen, closeCreateModal] = useModalContext((s) => [
    s.createModalIsOpen,
    s.closeCreateModal
  ])

  const onSubmit = async (form: PetSchema) => {
    const res = await PetService.create(form)
    if (res.data) {
      revalidateFetch("get-all-pets")
      closeCreateModal()
    } else {
      window.alert(res.message)
    }
  }

  return (
    <Modal.Root isOpen={createModalIsOpen} onClose={closeCreateModal}>
      <Modal.Header
        src={CreateIcon}
        alt="create icon"
        onClose={closeCreateModal}
      >
        Cadastrar
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <div className="mt-[66px] flex items-center justify-between">
          <Button
            height="md"
            width="lg"
            onClick={(e) => {
              e.preventDefault()
              closeCreateModal()
            }}
          >
            <Image src={ArrowLeftIcon} alt="arrow left icon" />
            <span className="bg-gradient-to-r from-light_blue to-default_blue bg-clip-text font-bold text-transparent">
              Voltar
            </span>
          </Button>
          <Button height="md" width="lg" variant="info" type="submit">
            <Image src={CreateIcon} alt="create icon" />
            Cadastrar
          </Button>
        </div>
      </Form>
    </Modal.Root>
  )
}
