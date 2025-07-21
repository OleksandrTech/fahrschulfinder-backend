import { PartialType } from '@nestjs/mapped-types';
import { CreateSchoolAdminDto } from '../../auth/dto/create-school-admin.dto';

export class UpdateDrivingSchoolDto extends PartialType(CreateSchoolAdminDto) {}
