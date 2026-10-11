import { Module } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { ProductController } from './product.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity.js';
import { Admin } from '../admin/entities/admin.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([Product,Admin])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
