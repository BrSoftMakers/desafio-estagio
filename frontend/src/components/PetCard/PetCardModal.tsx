import Image from "next/image"
import Button from "../presentation/Button"
//Icons
import EditIcon from "@/../public/assets/img/icons/blue-pencil.svg"
import CalendarIcon from "@/../public/assets/img/icons/calendar.svg"
import DNAIcon from "@/../public/assets/img/icons/dna.svg"
import PhoneIcon from "@/../public/assets/img/icons/phone.svg"
import DeleteIcon from "@/../public/assets/img/icons/trash.svg"
// Context
import { useModalContext } from "@/context/modalContext"
import formatNumber from "@/utils/formatNumber"
import { useMemo } from "react"

type PetCardModalProps = {
  id: number
  breed: string
  ownerPhone: string
  dateOfBirth: Date
}

export default function PetCardModal({
  breed,
  ownerPhone,
  dateOfBirth
}: PetCardModalProps) {
  const [toggleEditModal, toggleDeleteModal] = useModalContext((s) => [
    s.toggleEditModal,
    s.toggleDeleteModal
  ])

  const age = useMemo(
    () =>
      new Date(dateOfBirth).getFullYear() - new Date(Date.now()).getFullYear(),
    [dateOfBirth]
  )

  return (
    <div className="absolute top-full z-20 mt-3.5 flex w-[300px] items-center justify-start rounded-[10px] bg-gradient-to-r from-light_blue to-default_blue p-[3px]">
      <div className="flex size-full items-center rounded-[10px] bg-gradient-to-r from-dark to-dark_blue p-4">
        <div className="w-full">
          <div className="m-2 flex max-w-full flex-col items-start gap-2">
            <p className="flex items-center">
              <Image src={DNAIcon} alt="DNA icon" className="mr-2.5" />
              Raça: {breed}
            </p>
            <p className="flex items-center">
              <Image src={PhoneIcon} alt="phone icon" className="mr-2" />
              Telefone: {formatNumber(ownerPhone)}
            </p>
            <p className="flex items-center">
              <Image
                src={CalendarIcon}
                alt="calendar icon"
                className="mr-2.5"
              />
              Idade: {age} Anos ({new Date(dateOfBirth).toLocaleDateString()})
            </p>
          </div>
          <div className="mt-3 flex flex-col gap-3">
            <Button height="md" onClick={toggleEditModal}>
              <div className="flex items-center gap-2 bg-gradient-to-r from-light_blue to-default_blue bg-clip-text text-transparent">
                <Image src={EditIcon} alt="pencil icon" />
                Editar
              </div>
            </Button>
            <Button height="md" variant="info" onClick={toggleDeleteModal}>
              <Image src={DeleteIcon} alt="trash icon" />
              Remover
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
