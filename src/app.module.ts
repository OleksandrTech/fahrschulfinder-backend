import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchoolAdminModule } from './school-admin/school-admin.module';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { DrivingSchoolModule } from './driving-school/driving-school.module';

@Module({
  imports: [SchoolAdminModule, SuperAdminModule, AuthModule, DrivingSchoolModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
