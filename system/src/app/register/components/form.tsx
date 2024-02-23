import React, { ReactNode } from "react";
import { FormField } from "@/components/ui/form";

interface IFieldProps {
  name: string;
  label: string;
  description: string;
  placeholder: string;
}

export default function FormComponent(
  form,
  onSubmit: Promise<void>,
  fields: []
): ReactNode {
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      {fields.map((fieldProps: IFieldProps) => (
        <FormField
          key={fieldProps.name}
          control={form.control}
          name={fieldProps.name}
          render={({ field }) => (
            <div>
              <label>{fieldProps.label}</label>
              <input placeholder={fieldProps.placeholder} {...field} />
              {fieldProps.description && <p>{fieldProps.description}</p>}
            </div>
          )}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
