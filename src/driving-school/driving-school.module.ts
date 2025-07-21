import { Module } from '@nestjs/common';
import { DrivingSchoolController } from './driving-school.controller';
import { DrivingSchoolService } from './driving-school.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [DrivingSchoolController],
  providers: [DrivingSchoolService, PrismaService],
})
export class DrivingSchoolModule {}
