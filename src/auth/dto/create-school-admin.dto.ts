import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateSchoolAdminDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  schoolName: string;

  @IsString()
  address: string;

  @IsString()
  phone: string;

  @IsString()
  city: string;
}
