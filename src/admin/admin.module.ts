import { Module } from '@nestjs/common';
import { AdminService } from './admin.service.js';
import { AdminController } from './admin.controller.js';
import { Admin } from './entities/admin.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Admin])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
