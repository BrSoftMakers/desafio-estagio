import CalendarIcon from "@/../public/assets/img/icons/calendar.svg"
import DNAIcon from "@/../public/assets/img/icons/dna.svg"
import PetIcon from "@/../public/assets/img/icons/pet.svg"
import PhoneIcon from "@/../public/assets/img/icons/phone.svg"
import UserIcon from "@/../public/assets/img/icons/user.svg"

import PetRole from "@/enums/ePetRole"
import iPet from "@/types/iPet"
import { PetSchema } from "@/types/zod/PetSchema"
import phoneMask from "@/utils/phoneMask"
import { FormEvent, ReactNode, useState } from "react"
import FormField from "./components/FormField"
import Input from "./components/Input"
import LabelWithIcon from "./components/LabelWithIcon"
import PetRadios from "./components/PetRadios"

type FormProps = {
  onSubmit: (form: PetSchema) => void
  children: ReactNode
  defaultValues?: iPet
  disabled?: boolean
}

export default function Form({
  onSubmit,
  children,
  defaultValues,
  disabled = false
}: FormProps) {
  const [name, setName] = useState(defaultValues?.name || "")
  const [ownerName, setOwnerName] = useState(defaultValues?.ownerName || "")
  const [ownerPhone, setOwnerPhone] = useState(
    defaultValues?.ownerPhone.substring(3) || ""
  )
  const [breed, setBreed] = useState(defaultValues?.breed || "")
  const [animal, setAnimal] = useState(defaultValues?.animal || PetRole.DOG)
  const [dateOfBirth, setDateOfBirth] = useState(
    defaultValues?.dateOfBirth?.toString().substring(0, 10) || ""
  )

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const formFields: PetSchema = {
      name,
      ownerName,
      ownerPhone: "+55" + ownerPhone.replace(/\D/g, ""),
      animal,
      breed,
      dateOfBirth: new Date(dateOfBirth).toISOString()
    }
    onSubmit(formFields)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <FormField>
            <div>
              <LabelWithIcon htmlFor="name" src={PetIcon} alt="Phone Icon">
                Nome
              </LabelWithIcon>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                placeholder="Nome e Sobrenome"
                disabled={disabled}
              />
            </div>
            <div>
              <LabelWithIcon
                htmlFor="ownerName"
                src={UserIcon}
                alt="Owner Icon"
              >
                Dono
              </LabelWithIcon>
              <Input
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                name="ownerName"
                placeholder="Nome e Sobrenome"
                disabled={disabled}
              />
            </div>
            <div>
              <LabelWithIcon
                htmlFor="ownerPhone"
                src={PhoneIcon}
                alt="Phone Icon"
              >
                Telefone
              </LabelWithIcon>
              <Input
                type="tel"
                value={phoneMask(ownerPhone)}
                onChange={(e) => setOwnerPhone(e.target.value)}
                name="ownerPhone"
                placeholder="(00) 0 0000-0000"
                pattern="^(\(\d{2}\) [9] [0-9]{4}-[0-9]{4})"
                minLength={16}
                maxLength={16}
                disabled={disabled}
              />
            </div>
          </FormField>
          <FormField>
            <div>
              <LabelWithIcon htmlFor="animal" src={DNAIcon} alt="DNA Icon">
                Animal
              </LabelWithIcon>
              <PetRadios
                disabled={disabled}
                value={animal}
                onChange={(e) =>
                  setAnimal(
                    e.target.value === PetRole.DOG ? PetRole.DOG : PetRole.CAT
                  )
                }
              />
            </div>
            <div>
              <LabelWithIcon htmlFor="breed" src={DNAIcon} alt="DNA Icon">
                Raça
              </LabelWithIcon>
              <Input
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                name="breed"
                placeholder="Raça"
                disabled={disabled}
              />
            </div>
            <div className="text-grey">
              <LabelWithIcon
                htmlFor="dateOfBirth"
                src={CalendarIcon}
                alt="Calendar Icon"
              >
                Nascimento <span className="m-0 text-grey">(Aproximado)</span>
              </LabelWithIcon>
              <Input
                type="date"
                value={dateOfBirth}
                onChange={(e) => {
                  setDateOfBirth(e.target.value)
                }}
                placeholder="2020-08-22"
                disabled={disabled}
              />
            </div>
          </FormField>
        </div>
        {children}
      </form>
    </>
  )
}
