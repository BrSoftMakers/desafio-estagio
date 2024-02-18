import {
  Body,
  Controller,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { OwnerService } from './owner.service';
import { CreateOwnerDTO } from './dto/create-owner.dto';
import { UpdatePutOwnerDTO } from './dto/update-put-owner.dto';
import { UpdatePatchOwnerDTO } from './dto/update-patch-pet.dto';

@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() body: CreateOwnerDTO): Promise<CreateOwnerDTO> {
    return this.ownerService.create(body);
  }

  @Put(':id')
  @HttpCode(200)
  async edit(@Body() body, @Param('id') param): Promise<UpdatePutOwnerDTO> {
    return this.ownerService.editOneById(param, body);
  }

  @Patch(':id')
  @HttpCode(200)
  async update(@Body() body, @Param('id') param): Promise<UpdatePatchOwnerDTO> {
    return this.ownerService.updateOneById(param, body);
  }
}
