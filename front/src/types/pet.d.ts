export type Pet = {
  id?: number;
  name: string;
  type: "cat" | "dog";
  owner: string;
  breed: string;
  birthdate: Date;
  phone: string;
};

export type PetDTO = {
  id: number;
  name: string;
  type: "cat" | "dog";
  owner: string;
  breed: string;
  birthdate: string;
  phone: string;
};
