import { Type } from "class-transformer"
import {
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
  IsString,
  MaxDate,
  MaxLength,
  MinLength,
} from "class-validator"
import { PetRole } from "src/enums/PetRole"

export class CreatePetDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(120)
  name: string

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(120)
  ownerName: string

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(60)
  breed: string

  @IsString()
  @IsMobilePhone("pt-BR")
  ownerPhone: string

  @IsString()
  @IsNotEmpty()
  @IsEnum(PetRole)
  animal: string

  @Type(() => Date)
  @MaxDate(() => new Date(), {
    message: `maximal allowed date for dateOfBirth is ${new Date().toISOString()}`,
  })
  dateOfBirth: Date
}
