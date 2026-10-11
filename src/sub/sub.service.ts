import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubDto } from './dto/create-sub.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Sub } from './entities/sub.entity.js';
import { Repository } from 'typeorm';
import { Admin } from '../admin/entities/admin.entity.js';

@Injectable()
export class SubService {
  constructor(
    @InjectRepository(Sub) private subRepo: Repository<Sub>,
    @InjectRepository(Admin) private adminRepo: Repository<Admin>,
  ) {}
  async create(data: CreateSubDto, admin_id: number) {
    console.log(admin_id)
    const admin = await this.adminRepo.findOne({ where: { id: admin_id } });
    if (!admin) throw new NotFoundException('admin not found');
    const sub = this.subRepo.create({
      ...data,
      admin,
    });
    const savedSub = await this.subRepo.save(sub);
    return savedSub;
  }
}
