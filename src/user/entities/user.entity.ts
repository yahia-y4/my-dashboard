import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Admin } from '../../admin/entities/admin.entity.js';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  fatherName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'varchar', unique: true, nullable: true })
  NID: string | null = null;

  @Column({ nullable: true })
  phone: string;

  @Column({ default: 0 })
  dues: number;

  @Column({ default: 'user' })
  role: string;
  @Column({ name: 'admin_id' })
  admin_id: number;
  
  @ManyToOne(() => Admin, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'admin_id' })
  admin: Admin;
}
