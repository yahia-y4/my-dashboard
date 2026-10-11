import { Module } from '@nestjs/common';
import { SubService } from './sub.service.js';
import { SubController } from './sub.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sub } from './entities/sub.entity.js';
import { Admin } from '../admin/entities/admin.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([Sub,Admin])],
  controllers: [SubController],
  providers: [SubService],
})
export class SubModule {}
