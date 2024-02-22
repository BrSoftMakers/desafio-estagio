import PetRole from "@/enums/ePetRole"
import { InputHTMLAttributes } from "react"
import RadioInputGroup from "./RadioInputGroup"

type PetRadiosProps = {
  disabled: boolean | undefined
} & InputHTMLAttributes<HTMLInputElement>

export default function PetRadios({ disabled, ...rest }: PetRadiosProps) {
  return (
    <div className="flex items-center justify-between">
      <RadioInputGroup.Label disabled={disabled}>
        <RadioInputGroup.RadioInput
          name="animal"
          value={PetRole.DOG}
          disabled={disabled}
          defaultChecked
          {...rest}
        />
        Cachorro
      </RadioInputGroup.Label>
      <RadioInputGroup.Label disabled={disabled}>
        <RadioInputGroup.RadioInput
          name="animal"
          value={PetRole.CAT}
          disabled={disabled}
          {...rest}
        />
        Gato
      </RadioInputGroup.Label>
    </div>
  )
}
