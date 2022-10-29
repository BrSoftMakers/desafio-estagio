type Car = {
  id: number;
  brand: string;
  model: string;
  type: string | "hatch" | "sedan" | "suv";
  available: boolean;
  price: number;
  createdAt: Date;
  updatedAt: Date;
};

export default Car;
