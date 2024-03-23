import {
  FormSchemaType,
  RegisterSchemaOuputType,
  RegisterSchemaType,
} from "@/types";
import { z } from "zod";
import { FormSchema } from "./schema";

export class RegisterSchema<
  T extends Zod.ZodObject<
    RegisterSchemaType,
    "strip",
    z.ZodTypeAny,
    RegisterSchemaOuputType,
    RegisterSchemaOuputType
  >
> implements FormSchema<T>
{
  constructor(private schemaObject: T = z.object<FormSchemaType>({}) as T) {}
  addField(name: string, value: z.ZodTypeAny): RegisterSchema<T> {
    this.schemaObject.extend({
      [name]: value,
    }) as T;
    return this;
  }
  getSchema(): T {
    return this.schemaObject;
  }
}
