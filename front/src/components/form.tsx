"use client";

import { Form, FormField } from "@/components/ui/form";
import { FormSchemaType } from "@/types";
import Image from "next/image";
import { PropsWithChildren, ReactElement } from "react";
import {
  ControllerFieldState,
  ControllerRenderProps,
  Path,
  SubmitHandler,
  UseFormReturn,
  UseFormStateReturn,
} from "react-hook-form";
import { TypeOf, z } from "zod";
import { Button } from "./ui/button";

export const PetForm = <
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

export const PetFormFooter = ({
  children,
  iconClassName,
  iconSrc,
  iconAlt,
  iconWidth,
  iconHeight,
  label,
  labelClassName,
}: PropsWithChildren<{
  iconClassName: string;
  iconSrc: string;
  iconAlt: string;
  iconWidth: number;
  iconHeight: number;
  label: string;
  labelClassName: string;
}>) => {
  {
    children;
  }
  <Button type="submit" className={iconClassName}>
    <Image src={iconSrc} alt={iconAlt} width={iconWidth} height={iconHeight} />
    <span className={labelClassName}>{label}</span>
  </Button>;
};
