import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin/entities/admin.entity.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'my_dashboard',
      entities: [Admin],
      synchronize: true,
    }),
    AuthModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
