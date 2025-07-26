import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateDrivingSchoolDto } from './dto/update-driving-school.dto';

@Injectable()
export class DrivingSchoolService {
  constructor(private prisma: PrismaService) {}

  async findAll(city?: string) {
    const whereClause = city
      ? {
          city: {
            equals: city,
            mode: 'insensitive' as const, // Use 'as const' for strict typing
          },
        }
      : {}; // If no city, the where clause is an empty object, returning all records
  
    return this.prisma.drivingSchool.findMany({
      where: whereClause,
    });
  }

  async isOwner(adminId: number, schoolId: number): Promise<boolean> {
    const school = await this.prisma.drivingSchool.findUnique({
      where: { id: schoolId },
      include: { schoolAdmin: true },
    });
    return school?.schoolAdmin?.id === adminId;
  }

  async update(id: number, dto: UpdateDrivingSchoolDto) {
    const school = await this.prisma.drivingSchool.findUnique({ where: { id } });
    if (!school) throw new NotFoundException('School not found');
    return this.prisma.drivingSchool.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    // Найти всех SchoolAdmin, связанных с этой школой
    const schoolAdmins = await this.prisma.schoolAdmin.findMany({
      where: { drivingSchoolId: id },
    });

    // Удалить всех SchoolAdmin
    for (const admin of schoolAdmins) {
      await this.prisma.schoolAdmin.delete({
        where: { id: admin.id },
      });
    }

    // Теперь можно удалить школу
    return this.prisma.drivingSchool.delete({ where: { id } });
  }
}
