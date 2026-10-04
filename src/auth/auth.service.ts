import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '../admin/entities/admin.entity.js';
import { Repository } from 'typeorm';
import {UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {

constructor(
    @InjectRepository(Admin) private adminRepo: Repository<Admin>,
    private jwtService: JwtService,
) {}


    async login(email: string, password: string) {
        const admin = await this.adminRepo.findOne({ where: { email } });
        if (!admin) {
            throw new UnauthorizedException('Invalid email or password');
        }
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid email or password');
        }
        const payload = { email: admin.email, sub: admin.id, role: admin.role };

        return {
            access_token: await this.jwtService.signAsync(payload),
        }



    }
}
