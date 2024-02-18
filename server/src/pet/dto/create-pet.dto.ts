import { IsDateString, IsEnum, IsPhoneNumber, IsString } from 'class-validator';

export class CreatePetDTO {
  @IsString()
  name: string;

  @IsPhoneNumber('BR')
  phone: string;

  @IsEnum(['dog', 'cat'])
  animal: 'dog' | 'cat';

  @IsString()
  race: string;

  @IsDateString()
  birth: string;

  @IsString()
  ownerId: string;
}
