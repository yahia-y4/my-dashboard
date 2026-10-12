import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateSubDto } from './dto/create-sub.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Sub } from './entities/sub.entity.js';
import { Repository } from 'typeorm';
import { Admin } from '../admin/entities/admin.entity.js';
import { User } from '../user/entities/user.entity.js';

@Injectable()
export class SubService {
  constructor(
    @InjectRepository(Sub) private subRepo: Repository<Sub>,
    @InjectRepository(Admin) private adminRepo: Repository<Admin>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}
  async create(data: CreateSubDto, admin_id: number) {
    const admin = await this.adminRepo.findOne({ where: { id: admin_id } });
    if (!admin) throw new NotFoundException('admin not found');
    const sub = this.subRepo.create({
      ...data,
      admin,
    });
    const savedSub = await this.subRepo.save(sub);
    return savedSub;
  }
  async getSubs(admin_id: number) {
    const admin = await this.adminRepo.findOne({ where: { id: admin_id } });
    if (!admin) throw new NotFoundException('admin not found');
    const subs = await this.subRepo.find({ where: { admin_id: admin_id } });
    return subs;
  }
  async checkSub(data: any) {
    const user = await this.userRepo.findOne({
      where: { email: data.email },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.password !== data.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const sub = await this.subRepo.findOne({
      where: {
        user_id: user.id,
        status: 'active',
      },
    });

    if (!sub) {
      throw new NotFoundException('No active subscription');
    }

    return {
      success: true,
      name: user.name,
      fatherName:user.fatherName,
      lastName:user.lastName,
      NID:user.NID,
      subscription: 'active',
    };
  }
}
