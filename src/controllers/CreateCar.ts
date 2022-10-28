import { Request, Response } from "express";
import prisma from "../database/PrismaClient";
import Car from "../models/Car";

export class CreateCarController {
  async handle(req: Request, res: Response) {
    const { brand, model, type, available, price }: Car = req.body;

    try {
      await prisma.car.create({
        data: {
          brand,
          model,
          type,
          available,
          price,
        },
      });
    } catch (error) {
      const err = error as Error;
      return res.status(400).json({ error: err.message });
    }

    return res.status(201).json({
      message: "Car created successfully",
    });
  }
}
