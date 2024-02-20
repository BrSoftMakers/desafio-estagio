import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common"
import { Pet } from "@prisma/client"
import { PrismaService } from "src/database/prisma.service"
import { CreatePetDto } from "../dtos/create-pet.dto"
import { UpdatePetDto } from "../dtos/update-pet.dto"

@Controller("pets")
export class PetsController {
  constructor(private db: PrismaService) {}

  @Post()
  async create(@Body() body: CreatePetDto): Promise<{ data: Pet }> {
    const petCreated = await this.db.pet.create({
      data: body,
    })
    return { data: petCreated }
  }

  @Get()
  async findAll(): Promise<{ data: Pet[] }> {
    const list = await this.db.pet.findMany({
      orderBy: {
        name: "asc",
      },
    })
    return { data: list }
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: string): Promise<{ data: Pet }> {
    const idNumber = parseInt(id)
    const pet = await this.db.pet.findUnique({ where: { id: idNumber } })
    if (!pet) {
      throw new NotFoundException(`The pet with id ${id} was not found`)
    }
    return { data: pet }
  }

  @Put(":id")
  async update(
    @Param("id", ParseIntPipe) id: string,
    @Body() body: UpdatePetDto,
  ): Promise<{ data: Pet }> {
    const idNumber = parseInt(id)
    const pet = await this.db.pet.findUnique({ where: { id: idNumber } })

    if (!pet) {
      throw new NotFoundException(`The pet with id ${id} was not found`)
    }

    const petUpdated = await this.db.pet.update({
      where: { id: idNumber },
      data: body,
    })

    return { data: petUpdated }
  }

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<{ data: Pet }> {
    const idNumber = parseInt(id)
    const pet = await this.db.pet.findUnique({ where: { id: idNumber } })
    if (!pet) {
      throw new NotFoundException(`The pet with id ${id} was not found`)
    }
    const petRemoved = await this.db.pet.delete({ where: { id: idNumber } })
    return { data: petRemoved }
  }
}
