import PetRole from "@/enums/ePetRole"
import { InputHTMLAttributes } from "react"
import RadioInputGroup from "./RadioInputGroup"

type PetRadiosProps = {
  disabled: boolean | undefined
} & InputHTMLAttributes<HTMLInputElement>

export default function PetRadios({
  disabled,
  defaultValue,
  ...rest
}: PetRadiosProps) {
  return (
    <div className="flex items-center justify-between">
      <RadioInputGroup.Label disabled={disabled}>
        <RadioInputGroup.RadioInput
          name="animal"
          value={PetRole.DOG}
          disabled={disabled}
          defaultChecked={defaultValue === PetRole.DOG}
          {...rest}
        />
        Cachorro
      </RadioInputGroup.Label>
      <RadioInputGroup.Label disabled={disabled}>
        <RadioInputGroup.RadioInput
          name="animal"
          value={PetRole.CAT}
          disabled={disabled}
          defaultChecked={defaultValue === PetRole.CAT}
          {...rest}
        />
        Gato
      </RadioInputGroup.Label>
    </div>
  )
}
