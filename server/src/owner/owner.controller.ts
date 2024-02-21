import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { OwnerService } from './owner.service';

import { CreateOwnerDTO } from './dto/create-owner.dto';
import { UpdatePutOwnerDTO } from './dto/update-put-owner.dto';
import { UpdatePatchOwnerDTO } from './dto/update-patch-owner.dto';
import { DeleteOwnerDTO } from './dto/delete-pet.dto';
import { FindOwnerDTO } from './dto/find-owner.dto';

import { AuthGuard } from 'src/guards/auth.guards';
import { PermissionGuard } from 'src/guards/permission.guard';
import { Permissions } from 'src/decorators/permissions.decorator';
import { Permission } from 'src/enum/permissions.enum';

@UseGuards(AuthGuard, PermissionGuard)
@Permissions(Permission.boss, Permission.employee)
@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() body: CreateOwnerDTO): Promise<CreateOwnerDTO> {
    return this.ownerService.create(body);
  }

  @Get()
  @HttpCode(200)
  async findAll(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
  ): Promise<FindOwnerDTO[]> {
    return this.ownerService.findAll(Number(page), Number(pageSize));
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param() param): Promise<FindOwnerDTO> {
    return this.ownerService.findOne(param);
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

  @Delete(':id')
  @HttpCode(200)
  async delete(@Param('id') param): Promise<DeleteOwnerDTO> {
    return this.ownerService.deleteOneById(param);
  }
}
