import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin/entities/admin.entity.js';
import { AuthModule } from './auth/auth.module.js';
import { UserModule } from './user/user.module.js';
import { User } from './user/entities/user.entity.js';
import { ProductModule } from './product/product.module.js';
import { Product } from './product/entities/product.entity.js';
import { SubModule } from './sub/sub.module.js';
import { Sub } from './sub/entities/sub.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      // host: 'localhost',
      // port: 3306,
      // username: 'root',
      // password: '',
      database: 'my_dashboard',
      entities: [Admin,User,Product,Sub],
      synchronize: true,
    }),
    AuthModule,
    AdminModule,
    UserModule,
    ProductModule,
    SubModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
