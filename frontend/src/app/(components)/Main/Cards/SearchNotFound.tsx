import SearchingIcon from "@/../public/assets/img/searching.png"
import Image from "next/image"

export default function SearchNotFound() {
  return (
    <div className="flex max-h-[80%] flex-col items-center justify-center text-center">
      <div className="">
        <Image
          width={400}
          src={SearchingIcon}
          alt="Imagem de uma Lupa com passos de cachorro"
        />
      </div>
      <h1 className="text-lg sm:text-xl">
        Não foi possível encontrar nenhum pet que se ajuste à sua pesquisa.
      </h1>
    </div>
  )
}
