import { IsISO8601, IsIn, IsNotEmpty, Matches } from 'class-validator';

export class PetDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsIn(['cat', 'dog'])
  type: 'cat' | 'dog';

  @IsNotEmpty()
  owner: string;

  @IsNotEmpty()
  breed: string;

  @IsISO8601({ strict: true })
  birthdate: Date;

  @Matches(/^\(\d{2}\)\s9\s\d{4}-\d{4}$/)
  phone: string;
}
