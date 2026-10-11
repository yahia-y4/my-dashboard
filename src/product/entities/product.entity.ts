import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Admin } from "../../admin/entities/admin.entity.js";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    status: string;

    @Column({nullable:true})
    description:string

    @Column({name:"admin_id"})
    admin_id:number;

    @ManyToOne(()=>Admin,{onDelete:"CASCADE"})
    @JoinColumn({name:"admin_id"})
    admin:Admin;

}
