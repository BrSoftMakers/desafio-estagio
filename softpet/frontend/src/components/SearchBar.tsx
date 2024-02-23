import Image from "next/image";

export default function SearchBar() {
    return (
        <div className="flex items-center justify-between w-full h-[7vh] my-5 border-3 border-solid border-custom-gray rounded-lg ">
            <form className="flex w-full h-full items-center justify-between" action="">

                <button className="flex h-full px-[1vh] bg-custom-gray mr-3 items-center justify-center "> 
                    <Image
                    src={'/searchIcon.svg'} alt="search-Icon" width={30} height={30}
                    className="p-2 h-full"
                /></button>

                <input className = "bg-transparent flex-grow h-full text-white outline-none" type="text"></input>

                <div className="h-[7vh] w-1/10 p-[1vh]">
                    <button className="bg-custom-gray h-full w-full rounded-sm text-center font-ubuntu font-semibold leading-5 text-[1.5vh] text-white "> Pesquisar</button>
                </div>
            </form>
        </div>
    )
}