import SearchIcon from "@/../public/assets/img/icons/search.svg"
import Button from "@/components/presentation/Button"
import Image from "next/image"

export default function SearchBar() {
  return (
    <div className="flex h-full grow items-center rounded outline outline-grey">
      <label
        htmlFor="search"
        className="float-start flex h-full w-11 items-center justify-center rounded-l bg-grey text-dark_blue"
      >
        <Image src={SearchIcon} alt="search icon" />
      </label>
      <input
        type="text"
        id="search"
        className="size-full bg-transparent p-2 text-2xl outline-none"
      />
      <Button width="sm" height="sm" variant="mono" className="m-[3px]">
        Pesquisar
      </Button>
    </div>
  )
}
