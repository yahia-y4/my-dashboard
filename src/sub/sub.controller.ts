import { Controller,  Post, Body, Request,UseGuards } from '@nestjs/common';
import { SubService } from './sub.service.js';
import { CreateSubDto } from './dto/create-sub.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';

@Controller('sub')
@UseGuards(JwtAuthGuard)
export class SubController {
  constructor(private readonly subService: SubService) {}

  @Post()
  create(@Body() data: CreateSubDto , @Request() req:any) {
    return this.subService.create(data , req.user.id);
  }


}
