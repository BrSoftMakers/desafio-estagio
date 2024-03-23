import { FormSchemaType } from "@/types";
import { PropsWithChildren, ReactElement } from "react";
import {
  UseFormReturn,
  Path,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
} from "react-hook-form";
import { z, TypeOf } from "zod";
import { FormField } from "../ui/form";

export const PetFormField = <
  T extends z.ZodObject<
    FormSchemaType,
    "strip",
    z.ZodTypeAny,
    { [x: string]: any },
    { [x: string]: any }
  >
>({
  form,
  name,
  render,
}: PropsWithChildren<{
  form: UseFormReturn<z.infer<T>>;
  name: Path<TypeOf<T>>;
  render: ({
    field,
    fieldState,
    formState,
  }: {
    field: ControllerRenderProps<z.TypeOf<T>>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<z.infer<T>>;
  }) => ReactElement;
}>) => {
  return <FormField control={form.control} name={name} render={render} />;
};
