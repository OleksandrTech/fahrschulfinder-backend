import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateSchoolAdminDto } from './dto/create-school-admin.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register-school-admin')
  async registerSchoolAdmin(@Body() dto: CreateSchoolAdminDto) {
    try {
      console.log('Controller received registration request:', { email: dto.email, schoolName: dto.schoolName });
      const result = await this.authService.registerSchoolAdmin(dto);
      console.log('Controller registration successful');
      return result;
    } catch (error) {
      console.error('Controller registration error:', error);
      throw error;
    }
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
