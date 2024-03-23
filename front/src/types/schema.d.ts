import { z } from "zod";

export type FormSchemaType = {
  [k: string]: z.ZodTypeAny;
};
