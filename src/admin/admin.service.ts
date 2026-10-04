import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity.js';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AdminService {
  constructor(@InjectRepository(Admin) private adminRepo: Repository<Admin>) {}

  async register(data: any) {
    const password = await bcrypt.hash(data.password, 10);
    const admin = this.adminRepo.save({
      email: data.email,
      password: password,
    });
    return admin;
  }
}
