import { Request, Response } from "express";
import prisma from "../database/PrismaClient";
import Car from "../models/Car";

export class GetByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const car = await prisma.car.findUnique({
      where: {
        id: Number(id),
      },
    });

    return res.status(200).json(car);
  }
}
