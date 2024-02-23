import Image from "next/image";
import Button from "./Button";

interface CardpetdetailProps{
    buttonActionEdit:()=>void,
    buttonActionRemove:()=>void,
    buttonActionAdd:()=>void,
    openModal:(openModalContent: Function)=>void,
    data: {
        "id": number,
        "nome_sobrenome": string,
        "animal": "Cachorro"|"Gato",
        "dono": string,
        "raca": string,
        "telefone": string,
        "nascimento": string
    },
}

export default function Cardpetdetail(props:CardpetdetailProps) {

    function calcularIdade(dataNascimento:string) {
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
        
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mesAtual = hoje.getMonth() + 1;
        const mesNascimento = nascimento.getMonth() + 1;
        
        // Verifica se já fez aniversário este ano
        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }
        
        return idade;
    }

    const idade = calcularIdade(props.data.nascimento)
    const raca = props.data.raca;
    const telefone = props.data.telefone

    const textClass = "text-white font-ubuntu font-normal text-sm"

    return (
        <div className=" absolute bg-degrade-blue h-[27vh]  w-[43vh] p-[0.5vh] rounded-lg mt-[1.5vh] shadow-lg shadow-sd-blue">

            <div className="h-full  w-full bg-degrade-dark rounded-lg   p-[2vh]  items-center px-3vh">

                <div className="ml-[2vh]">
                    <div className="flex items-center">
                        <Image src={"./dnaIcon.svg"} alt="dna-Icon" width={10} height={10} className="w-[1.5vh] mr-1vh mb-[1vh] m-[0.5vh]" />
                        <span className={textClass}>{raca}</span>
                    </div>
                    <div className="flex">
                        <Image src={"./cellphoneIcon.svg"} alt=" cellphone-Icon" width={10} height={10} className="w-[2vh] mr-1vh mb-[1vh]" />
                        <span className={textClass}>{telefone}</span>
                    </div>
                    <div className="flex mb-[1vh]">
                        <Image src={"./calendarIcon.svg"} alt="" width={10} height={10} className="w-[2vh] mr-1vh mb-[1vh]" />
                        <span className={textClass}>{idade}</span>
                    </div>

                </div>
                <div className=" h-[5vh] w-full mb-[1vh]">
                    <Button  openModel={props.openModal}  action={props.buttonActionEdit} insideText="Editar" bgColor="White" iconPath="./editIcon.svg" isOpenModel={true}/>
                </div>
                <div className=" h-[5vh] w-full">
                    <Button  openModel={props.openModal}  action={props.buttonActionRemove} insideText="Remover" bgColor="Blue" iconPath="./trashIcon.svg" isOpenModel={true}/>
                </div>

            </div>

        </div> 
    )
}