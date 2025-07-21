import {
  Controller,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UpdateDrivingSchoolDto } from './dto/update-driving-school.dto';
import { DrivingSchoolService } from './driving-school.service';

@Controller('driving-schools')
export class DrivingSchoolController {
  constructor(private readonly drivingSchoolService: DrivingSchoolService) {}

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SCHOOL_ADMIN')
  async update(@Param('id') id: number, @Body() dto: UpdateDrivingSchoolDto, @Req() req) {
    // Проверяем, что SchoolAdmin обновляет только свою школу
    const user = req.user;
    const isOwner = await this.drivingSchoolService.isOwner(user.userId, +id);
    if (!isOwner) throw new ForbiddenException('You can update only your own school');
    return this.drivingSchoolService.update(+id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SCHOOL_ADMIN')
  async remove(@Param('id') id: string, @Req() req) {
    // Проверяем, что SchoolAdmin удаляет только свою школу
    const user = req.user;
    const isOwner = await this.drivingSchoolService.isOwner(user.userId, +id);
    if (!isOwner) throw new ForbiddenException('You can delete only your own school');
    return this.drivingSchoolService.remove(Number(id));
  }
}
