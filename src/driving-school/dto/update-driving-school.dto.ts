import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsUrl,
  IsArray,
  IsBoolean,
  IsNumber,
  IsJSON,
} from 'class-validator';

export class UpdateDrivingSchoolDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ required: false, description: 'JSON object for branch locations' })
  @IsOptional()
  @IsJSON()
  branches?: any;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  websiteUrl?: string;

  @ApiProperty({ required: false, description: 'JSON object for social media links' })
  @IsOptional()
  @IsJSON()
  socialMediaLinks?: any;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  openingHours?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  serviceArea?: string;

  @ApiProperty({ type: [String], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  licenseClasses?: string[];

  @ApiProperty({ type: [String], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  transmissionType?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  baseFee?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  pricePerStandardLesson?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  pricePerSpecialLesson?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  theoryCourseIncluded?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  theoryCoursePrice?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  firstAidCourseOffered?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  firstAidCoursePrice?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  visionTestOffered?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  visionTestPrice?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  tuevDekraRegistrationIncluded?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  practicalExamFee?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  theoryExamFee?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  averageFinalPrice?: number;

  @ApiProperty({ type: [String], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  trainingLanguages?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  supportForDisabled?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  hasDigitalClasses?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  hasOnlineRegistration?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  offersIntensiveCourses?: boolean;

  @ApiProperty({ type: [String], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  specialOffers?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  specializationInAccompaniedDriving17?: boolean;

  @ApiProperty({ type: [String], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  financingOptions?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  successRate?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  logoUrl?: string;

  @ApiProperty({ type: [String], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  galleryImageUrls?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  videoPresentationUrl?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  allowReviews?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  canRespondToReviews?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;
}