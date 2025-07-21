import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateSchoolAdminDto } from './dto/create-school-admin.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register-school-admin')
  registerSchoolAdmin(@Body() dto: CreateSchoolAdminDto) {
    return this.authService.registerSchoolAdmin(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
