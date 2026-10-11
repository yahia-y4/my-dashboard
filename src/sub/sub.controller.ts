import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { SubService } from './sub.service.js';
import { CreateSubDto } from './dto/create-sub.dto.js';

@Controller('sub')
export class SubController {
  constructor(private readonly subService: SubService) {}

  @Post()
  create(@Body() data: CreateSubDto , @Request() req:any) {
    return this.subService.create(data);
  }


}
