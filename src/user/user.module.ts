import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserController } from './user.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity.js';
import { Admin } from '../admin/entities/admin.entity.js';


@Module({
  imports:[TypeOrmModule.forFeature([User,Admin])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
