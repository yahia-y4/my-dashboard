import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity.js';
import { Repository } from 'typeorm';
import { Admin } from '../admin/entities/admin.entity.js';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
    @InjectRepository(Admin) private adminRepo: Repository<Admin>,
  ) {}
  async create(data: CreateProductDto, admin_id: number) {
    const admin = await this.adminRepo.findOne({ where: { id: admin_id } });
    if (!admin) throw new NotFoundException('admin not found');
    const product = this.productRepo.create({
      ...data,
      admin,
    });
    const sevedProduct = await this.productRepo.save(product);
    return sevedProduct;
  }
}
