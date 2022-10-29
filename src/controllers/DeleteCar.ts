import { Request, Response } from "express";
import prisma from "../database/PrismaClient";

export class DeleteCarController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

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

    const nothing = await prisma.car.delete({
      where: {
        id: Number(id),
      },
    });

    //No-Content
    return res.status(204).json({ data: nothing });
  }
}
