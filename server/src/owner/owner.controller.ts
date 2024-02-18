import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { CreateOwnerDTO } from './dto/create-owner.dto';

@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() body: CreateOwnerDTO): Promise<CreateOwnerDTO> {
    return this.ownerService.create(body);
  }
}
