import iPet from "@/types/iPet"
import fetchData from "@/utils/fetchData"
import PetCard from "./PetCard"

export default async function Cards() {
  const res = await fetchData("http://localhost:8000/api/v1/pets")
  const pets = (await res.json()).data

  return (
    <div className="inset-0 grid grid-cols-4 grid-rows-4 gap-5">
      {pets.map((pet: iPet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  )
}
