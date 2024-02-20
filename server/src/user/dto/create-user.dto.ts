import {
  IsArray,
  IsDateString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
export class CreateUserDTO {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsDateString()
  emailVerified: Date;

  @IsString()
  @IsOptional()
  image: string;

  @IsEnum(['boss', 'employee', 'client'])
  permission: 'boss' | 'employee' | 'client';

  @IsOptional()
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  password: string;

  @IsOptional()
  @IsArray()
  sessions: [];

  @IsOptional()
  @IsArray()
  accounts: [];
}
