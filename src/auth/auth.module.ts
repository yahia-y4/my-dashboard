import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { JwtModule } from '@nestjs/jwt';
import { Admin } from '../admin/entities/admin.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    JwtModule.register({
      secret: 'mysecretkey',
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([Admin]),
  ],

  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
