import { IsISO8601, IsIn, IsNotEmpty, Matches } from 'class-validator';

export class CreatePetDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsIn(['cat', 'dog'])
  species: string;

  @IsNotEmpty()
  ownerName: string;

  @IsNotEmpty()
  breed: string;

  @IsISO8601({ strict: true })
  birthdate: string;

  @Matches(/^\(\d{2}\)\s9\s\d{4}-\d{4}$/)
  ownerPhone: string;
}
