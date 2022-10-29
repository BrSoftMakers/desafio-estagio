import { Request, Response } from "express";
import prisma from "../database/PrismaClient";
import Car from "../models/Car";

export class UpdateCarController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { brand, type, model, available, price }: Car = req.body;

    if (!id) {
      return res.status(400).json({ error: "Invalid param, missing id" });
    }

    const car = await prisma.car.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    const updatedCar = await prisma.car.update({
      where: {
        id: Number(id),
      },
      data: {
        brand,
        type,
        model,
        available,
        price,
      },
    });

    return res.status(200).json(updatedCar);
  }
}
