import { FormSchemaType } from "@/types";
import { PropsWithChildren } from "react";
import { UseFormReturn, SubmitHandler, Form } from "react-hook-form";
import { z, TypeOf } from "zod";

export const PetFormRoot = <
  T extends z.ZodObject<
    FormSchemaType,
    "strip",
    z.ZodTypeAny,
    { [x: string]: any },
    { [x: string]: any }
  >
>({
  children,
  form,
  onSubmit,
}: PropsWithChildren<{
  form: UseFormReturn<z.infer<T>>;
  onSubmit: SubmitHandler<TypeOf<T>>;
}>) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full grid gap-4 grid-cols-2"
      >
        {children}
      </form>
    </Form>
  );
};
