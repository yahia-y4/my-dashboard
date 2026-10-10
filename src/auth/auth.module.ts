import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { JwtModule } from '@nestjs/jwt';
import { Admin } from '../admin/entities/admin.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './strategies/jwt.strategy.js';
import { JwtAuthGuard } from './guards/jwt-auth.guard.js';

@Module({
  imports: [
    JwtModule.register({
      secret: 'mysecretkey',
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([Admin]),
  ],

  controllers: [AuthController],
  providers: [AuthService,JwtStrategy,JwtAuthGuard],
})
export class AuthModule {}
