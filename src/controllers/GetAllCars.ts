import { Request, Response } from "express";
import prisma from "../database/PrismaClient";

export class GetAllCarsController {
  async handle(req: Request, res: Response) {
    const cars = await prisma.car.findMany();

    return res.status(200).json(cars);
  }
}
