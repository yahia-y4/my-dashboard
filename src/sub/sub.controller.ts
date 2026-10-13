import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  Get,
  Put,
  Param,
} from '@nestjs/common';
import { SubService } from './sub.service.js';
import { CreateSubDto } from './dto/create-sub.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { UpdateSubDto } from './dto/update-sub.dto.js';

@Controller('sub')
export class SubController {
  constructor(private readonly subService: SubService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() data: CreateSubDto, @Request() req: any) {
    return this.subService.create(data, req.user.id);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  getSubs(@Request() req: any) {
    return this.subService.getSubs(req.user.id);
  }
  @Post('check')
  checkSub(@Body() data: any) {
    return this.subService.checkSub(data);
  }

  @Put(':id')
  updateSub(@Body() data :UpdateSubDto , @Param('id') id:number){
    return this.subService.updateSub(data,id)
  }
}
