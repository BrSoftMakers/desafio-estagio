import Button from "./Button";
import SearchBar from "./SearchBar";

interface NavbarProps{
    buttonActionEdit:()=>void,
    buttonActionRemove:()=>void,
    buttonActionAdd:()=>void,
    openModal:(openModalContent: Function)=>void,
}

export default function Navbar(props:NavbarProps){
    return(
        <div className="flex items-center ">
            <div className=" w-full mr-[2vh]">
                <SearchBar/>
            </div>
            
            <div className="w-[20vh] h-[7vh] flex justify-center items-center ml-auto">
               <Button openModel={props.openModal}  isOpenModel={true} action={props.buttonActionAdd} insideText="Cadastrar" bgColor="Blue" iconPath="./addIcon.svg"/> 
            </div> 
        </div>
    )
}