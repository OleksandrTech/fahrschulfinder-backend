import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateSchoolAdminDto } from './dto/create-school-admin.dto';
import { LoginDto } from './dto/login.dto';
import { SchoolAdmin, SuperAdmin } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async registerSchoolAdmin(dto: CreateSchoolAdminDto) {
    try {
      console.log('Starting registration for:', dto.email);
      
      // Проверка email
      console.log('Checking if email exists...');
      const existing = await this.prisma.schoolAdmin.findUnique({ where: { email: dto.email } });
      if (existing) throw new BadRequestException('Email already in use');
      console.log('Email check passed');

      // Хэширование пароля (reduced rounds for faster processing)
      console.log('Hashing password...');
      const hash = await bcrypt.hash(dto.password, 8);
      console.log('Password hashed successfully');

      // Создание DrivingSchool
      console.log('Creating driving school...');
      const drivingSchool = await this.prisma.drivingSchool.create({
        data: {
          name: dto.schoolName,
          address: dto.address,
          phone: dto.phone,
          city: dto.city,
          email: dto.email,
          // Remove problematic fields for now - they have default values in schema
        },
      });
      console.log('Driving school created with ID:', drivingSchool.id);

      // Создание SchoolAdmin
      console.log('Creating school admin...');
      const schoolAdmin = await this.prisma.schoolAdmin.create({
        data: {
          email: dto.email,
          password: hash,
          drivingSchoolId: drivingSchool.id,
        },
      });
      console.log('School admin created with ID:', schoolAdmin.id);

      console.log('Registration completed successfully');
      return { message: 'School admin registered successfully' };
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }

  async login(dto: LoginDto) {
    // Ищем SchoolAdmin
    let user: SchoolAdmin | SuperAdmin | null = await this.prisma.schoolAdmin.findUnique({
      where: { email: dto.email },
    });
    let role = 'SCHOOL_ADMIN';

    if (!user) {
      const superAdmin = await this.prisma.superAdmin.findUnique({ where: { email: dto.email } });
      if (!superAdmin) throw new UnauthorizedException('Invalid credentials');
      user = superAdmin;
      role = 'SUPER_ADMIN';
    }

    // Проверяем, что пользователь найден и у него есть пароль
    if (!user || !user.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Проверяем пароль
    const valid = await bcrypt.compare(dto.password, user.password);
    if (!valid) throw new UnauthorizedException('Invalid credentials');

    // Генерируем JWT
    const payload = { sub: user.id, email: user.email, role };
    const token = await this.jwtService.signAsync(payload);

    return { access_token: token, role };
  }
}
