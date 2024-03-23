import { FormSchemaType } from "@/types";
import { z } from "zod";

export abstract class FormSchema<
  T extends z.ZodObject<
    FormSchemaType,
    "strip",
    z.ZodTypeAny,
    { [x: string]: any },
    { [x: string]: any }
  >
> {
  constructor() {}

  abstract addField(
    name: string,
    value: FormSchemaType[keyof FormSchemaType]
  ): FormSchema<T>;
  abstract getSchema(): T;
}
