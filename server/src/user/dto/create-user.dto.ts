import {
  IsString,
  IsEmail,
  IsDateString,
  IsEnum,
  IsArray,
  IsStrongPassword,
  IsOptional,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsDateString()
  @IsOptional()
  emailVerified?: Date;

  @IsStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  @IsString()
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsEnum(['boss', 'employee', 'client'])
  permission: 'boss' | 'employee' | 'client';

  @IsArray()
  @IsOptional()
  accounts?: [];

  @IsArray()
  @IsOptional()
  sessions?: [];
}
