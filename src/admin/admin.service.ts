import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity.js';
import { Repository } from 'typeorm';
@Injectable()
export class AdminService {
  constructor(@InjectRepository(Admin) private adminRepo: Repository<Admin>) {}

  async register(data:any){
    const admin =  this.adminRepo.save(data);
    return admin;
  } 
}
