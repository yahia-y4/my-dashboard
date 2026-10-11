import { PartialType } from '@nestjs/mapped-types';
import { CreateSubDto } from './create-sub.dto.js';

export class UpdateSubDto extends PartialType(CreateSubDto) {}
