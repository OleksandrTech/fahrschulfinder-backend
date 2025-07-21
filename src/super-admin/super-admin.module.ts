import { Module } from '@nestjs/common';
import { SuperAdminController } from './super-admin.controller';

@Module({
  controllers: [SuperAdminController],
  providers: [],
})
export class SuperAdminModule {}
