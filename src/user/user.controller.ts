import { Body, Controller, Post, UseGuards ,Request} from '@nestjs/common';
import { UserService } from './user.service.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js'; 
import { CreateUserDto } from './dto/createUserDto.js';



@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() body: CreateUserDto , @Request() req :any ){
    return this.userService.create(body , req.user.id)
  }
  
}
