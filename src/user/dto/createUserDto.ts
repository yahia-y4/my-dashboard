export class CreateUserDto {
  name: string;
  fatherName: string;
  lastName: string;
  email: string;
  password: string;
  NID?: string;
  phone?: string;
  admin_id?:number
}