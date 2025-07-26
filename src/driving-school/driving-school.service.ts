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
    
    // Create a safe data object by filtering out problematic array fields
    const safeData: any = {};
    
    // Only include non-array fields for now
    if (dto.name !== undefined) safeData.name = dto.name;
    if (dto.address !== undefined) safeData.address = dto.address;
    if (dto.phone !== undefined) safeData.phone = dto.phone;
    if (dto.websiteUrl !== undefined) safeData.websiteUrl = dto.websiteUrl;
    if (dto.openingHours !== undefined) safeData.openingHours = dto.openingHours;
    if (dto.serviceArea !== undefined) safeData.serviceArea = dto.serviceArea;
    if (dto.baseFee !== undefined) safeData.baseFee = dto.baseFee;
    if (dto.pricePerStandardLesson !== undefined) safeData.pricePerStandardLesson = dto.pricePerStandardLesson;
    if (dto.pricePerSpecialLesson !== undefined) safeData.pricePerSpecialLesson = dto.pricePerSpecialLesson;
    if (dto.theoryCourseIncluded !== undefined) safeData.theoryCourseIncluded = dto.theoryCourseIncluded;
    if (dto.theoryCoursePrice !== undefined) safeData.theoryCoursePrice = dto.theoryCoursePrice;
    if (dto.firstAidCourseOffered !== undefined) safeData.firstAidCourseOffered = dto.firstAidCourseOffered;
    if (dto.firstAidCoursePrice !== undefined) safeData.firstAidCoursePrice = dto.firstAidCoursePrice;
    if (dto.visionTestOffered !== undefined) safeData.visionTestOffered = dto.visionTestOffered;
    if (dto.visionTestPrice !== undefined) safeData.visionTestPrice = dto.visionTestPrice;
    if (dto.tuevDekraRegistrationIncluded !== undefined) safeData.tuevDekraRegistrationIncluded = dto.tuevDekraRegistrationIncluded;
    if (dto.practicalExamFee !== undefined) safeData.practicalExamFee = dto.practicalExamFee;
    if (dto.theoryExamFee !== undefined) safeData.theoryExamFee = dto.theoryExamFee;
    if (dto.averageFinalPrice !== undefined) safeData.averageFinalPrice = dto.averageFinalPrice;
    if (dto.supportForDisabled !== undefined) safeData.supportForDisabled = dto.supportForDisabled;
    if (dto.hasDigitalClasses !== undefined) safeData.hasDigitalClasses = dto.hasDigitalClasses;
    if (dto.hasOnlineRegistration !== undefined) safeData.hasOnlineRegistration = dto.hasOnlineRegistration;
    if (dto.offersIntensiveCourses !== undefined) safeData.offersIntensiveCourses = dto.offersIntensiveCourses;
    if (dto.specializationInAccompaniedDriving17 !== undefined) safeData.specializationInAccompaniedDriving17 = dto.specializationInAccompaniedDriving17;
    if (dto.successRate !== undefined) safeData.successRate = dto.successRate;
    if (dto.logoUrl !== undefined) safeData.logoUrl = dto.logoUrl;
    if (dto.videoPresentationUrl !== undefined) safeData.videoPresentationUrl = dto.videoPresentationUrl;
    if (dto.allowReviews !== undefined) safeData.allowReviews = dto.allowReviews;
    if (dto.canRespondToReviews !== undefined) safeData.canRespondToReviews = dto.canRespondToReviews;
    if (dto.description !== undefined) safeData.description = dto.description;
    
    return this.prisma.drivingSchool.update({
      where: { id },
      data: safeData,
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
