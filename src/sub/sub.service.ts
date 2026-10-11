import { Injectable } from '@nestjs/common';
import { CreateSubDto } from './dto/create-sub.dto.js';

@Injectable()
export class SubService {
  create(createSubDto: CreateSubDto) {
    return 'This action adds a new sub';
  }

  
}
