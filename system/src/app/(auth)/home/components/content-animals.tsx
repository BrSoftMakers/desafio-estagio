import CardAnimals, { ICardAnimals } from "@/components/ui/card-animals";

interface ContentAnimalsProps {
  animals: ICardAnimals[];
  onGet: () => Promise<void>;
}

export default function ContentAnimals({ animals, onGet }: ContentAnimalsProps) {
  return (
    <div className="w-full grid grid-cols-4 gap-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        <CardAnimals animals={animals} onGet={onGet} />
    </div>
  );
}
