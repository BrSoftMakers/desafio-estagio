export type RegisterSchemaType = {
  name: z.ZodString;
  type: z.ZodEnum<["cat", "dog"]>;
  owner: z.ZodString;
  breed: z.ZodString;
  birthdate: z.ZodDate;
  phone: z.ZodString;
};

export type RegisterSchemaInputType = {
  name: string;
  type: "cat" | "dog";
  owner: string;
  breed: string;
  birthdate: Date;
  phone: string;
};

export type RegisterSchemaOuputType = {
  name: string;
  type: "cat" | "dog";
  owner: string;
  breed: string;
  birthdate: Date;
  phone: string;
};
