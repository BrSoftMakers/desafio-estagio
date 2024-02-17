import Image from "next/image"
import SearchIcon from "../../public/assets/img/icons/search.svg"

export default function SearchBar() {
  return (
    <div className="outline-grey flex h-full grow items-center rounded outline">
      <label
        htmlFor="search"
        className="text-dark_blue bg-grey float-start flex h-full w-11 items-center justify-center rounded-l"
      >
        <Image src={SearchIcon} alt="search icon" />
      </label>
      <input
        type="text"
        id="search"
        className="size-full bg-transparent p-2 text-2xl outline-none"
      />
      <button className="bg-grey m-1.5 h-[72%] w-28 rounded font-bold">
        Pesquisar
      </button>
    </div>
  )
}
