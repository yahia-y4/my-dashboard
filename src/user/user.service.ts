import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity.js';
import { Admin } from '../admin/entities/admin.entity.js';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Admin) private adminRepo: Repository<Admin>,
  ) {}

  async create(data: any, adminId: number) {
    const admin = await this.adminRepo.findOne({ where: { id: adminId } });
    if (!admin) throw new NotFoundException('not admin found');
    const user = this.userRepo.create({
      ...data,
      admin,
    });
    const seveduser = await this.userRepo.save(user);
    return seveduser
  }
  async getUsers( adminId: number){
    const users = await this.userRepo.find({where:{admin:{id:adminId}}})
    return users;
  }
}
