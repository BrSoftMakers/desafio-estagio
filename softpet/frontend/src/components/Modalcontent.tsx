'use client'

import Image from "next/image"
import Button from "./Button"
import { useState, useRef, useEffect } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Pet = {
    id: number;
    nome_sobrenome: string;
    animal: "Cachorro" | "Gato";
    dono: string;
    raca: string;
    telefone: string;
    nascimento: string;
};

interface ModalcontentProps {
    onClose: () => void,
    removePet: () => void,
    addPet: (pet: {
        "nome_sobrenome": string,
        "animal": "Cachorro" | "Gato",
        "dono": string,
        "raca": string,
        "telefone": string,
        "nascimento": string
    }) => void,
    editPet: () => void,
    actionButton: "Remove" | "Add" | "Edit"
    icon: string,
    ModalTitle: string,
    data: {
        "id": number,
        "nome_sobrenome": string,
        "animal": "Cachorro" | "Gato",
        "dono": string,
        "raca": string,
        "telefone": string,
        "nascimento": string
    },
}


export default function Modalcontent(props: ModalcontentProps) {

    const action = {
        "Remove": props.removePet,
        "Add": props.addPet,
        "Edit": props.editPet,
    }


    // Config de Escolha de Raça 

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleCheckboxChange = (checkboxId: string) => {
        if (checkboxId === 'option1') {
            setIsChecked1(true);
            setIsChecked2(false);
        } else if (checkboxId === 'option2') {
            setIsChecked1(false);
            setIsChecked2(true);
        }
    };


    function converterDataParaIso(datastring: string): string {
        const [dia, mes, ano] = datastring.split('-');
        const data = new Date(`${ano}-${mes}-${dia}T00:00:00.000Z`);
        return data.toISOString();
    }

    function converterDataParaString(datastring: string) {
        const data = new Date(datastring);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        return `${dia}-${mes}-${ano}`;
    }

    // Datepicker

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        if (props.data.animal === "Cachorro") {
            setIsChecked1(true);
            setIsChecked2(false);
        } else if (props.data.animal === "Gato") {
            setIsChecked1(false);
            setIsChecked2(true);
        }
    }, [props.data.animal]);


    return (
        <div className="w-[72vh] h-[70vh] bg-degrade-blue p-[0.5vh] rounded-lg shadow-lg shadow-sd-blue">
            <div className="bg-degrade-dark w-full h-full rounded-lg p-[8vh]">

                <div className=" flex items-center">

                    <div className="bg-degrade-blue w-[10vh] h-[10vh] rounded-full items-center flex justify-center ">
                        <Image src={props.icon} alt="Edit-icon" width={10} height={10} className="w-[4vh]" />
                    </div>

                    <span className="text-white font-ubuntu font-bold text-[3.5vh] ml-[2vh]">{props.ModalTitle} </span>

                    <button
                        onClick={props.onClose}
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    >
                        <Image src={"./closeIcon.svg"} alt="Close-icon" width={10} height={10} className="w-[1.5vh]" />
                    </button>

                </div>

                <form id="formulario" action="" >
                    <div className=" grid grid-cols-2 justify-between gap-[3vh] mt-[4vh]">

                        <div className=" w-full">

                            <div>
                                <span className="flex text-white font-ubuntu font-normal text-[2vh] mb-[0.2vh]">
                                    <Image src={'./collarIcon.svg'} alt="colar-Icon" width={10} height={10} className="w-[2.5vh] mr-[1vh]" />
                                    Nome
                                </span>
                                <input
                                    name="nome_Sobrenome"
                                    type="text"
                                    disabled={props.actionButton === "Remove" ? true : false}
                                    placeholder={props.data.nome_sobrenome}
                                    className={`${props.actionButton === "Remove" ? "bg-custom-gray placeholder-white" : "bg-transparent"} px-[1vh] text-white font-ubuntu w-full h-[4vh] border rounded-lg border-[0.3vh] border-custom-gray mt-[1vh] mb-[1.6vh]`} />
                            </div>


                            <div>
                                <span className="flex text-white font-ubuntu font-normal text-[2vh]">
                                    <Image src={'./perfilIcon.svg'} alt="perfi-icon" width={10} height={10} className="w-[2.5vh] mr-[1vh]" />
                                    Dono
                                </span>
                                <input disabled={props.actionButton === "Remove" ? true : false} name="dono" placeholder={props.data.dono} type="text" className={`${props.actionButton === "Remove" ? "bg-custom-gray placeholder-white" : "bg-transparent"} px-[1vh] text-white font-ubuntu w-full h-[4vh] border rounded-lg border-[0.3vh] border-custom-gray mt-[1vh] mb-[1.6vh]`} />
                            </div>


                            <div>
                                <span className="flex text-white font-ubuntu font-normal text-[2vh]">
                                    <Image src={'./cellPhoneIcon.svg'} alt="cellphone-icon" width={10} height={10} className="w-[2.5vh] mr-[1vh]" />
                                    Telefone
                                </span>
                                <input name="telefone" placeholder={props.data.telefone} disabled={props.actionButton === "Remove" ? true : false} type="text" className={`${props.actionButton === "Remove" ? "bg-custom-gray placeholder-white" : "bg-transparent"} px-[1vh] text-white font-ubuntu w-full h-[4vh] border rounded-lg border-[0.3vh] border-custom-gray mt-[1vh] mb-[1.6vh]`} />
                            </div>



                            <div className="h-[6vh] mt-[4vh] ">
                                <Button bgColor="White" action={props.onClose} iconPath="./backArrowIcon.svg" insideText="Voltar" isOpenModel={false} />
                            </div>

                        </div>

                        <div className=" w-full mb-auto ">

                            <div>
                                <span className="flex text-white font-ubuntu font-normal text-[2vh]">
                                    <Image src={'./dnaIcon.svg'} alt="dna-icon" width={10} height={10} className="w-[1.3vh] mr-[1vh]" />
                                    Animal
                                </span>
                            </div>


                            <div className="flex mt-[1vh] gap-1 mb-[1.6vh]">
                                <div
                                    onClick={props.actionButton === "Remove"?false: () => handleCheckboxChange('option1')}
                                    className={`cursor-pointer w-full h-[4vh] border border-[0.3vh] text-[2vh] rounded-lg  font-ubuntu flex justify-center items-center gap-1 ${isChecked1 ? 'border-white text-white' : 'text-custom-gray border-custom-gray'}`}
                                >
                                    <Image src={isChecked1 ? "./checkCircleWhite.svg" : "./checkCircle.svg"} alt="check-circle" width={10} height={10} className="" />
                                    <span>Cachorro</span>
                                </div>
                                <div
                                    onClick={props.actionButton === "Remove"?false: () => handleCheckboxChange('option2')}
                                    className={` cursor-pointer w-full border border-[0.3vh] rounded-lg text-[2vh] border-custom-gray font-ubuntu flex justify-center items-center gap-1 ${isChecked2 ? 'border-white text-white' : 'text-custom-gray border-custom-gray'}`}
                                >
                                    <Image src={isChecked2 ? "./checkCircleWhite.svg" : "./checkCircle.svg"} alt="check-circle" width={10} height={10} className="" />
                                    <span>Gato</span>
                                </div>
                            </div>

                            <div>
                                <span className="flex text-white font-ubuntu font-normal text-[2vh]">
                                    <Image src={'./dnaIcon.svg'} alt="dna-icon" width={10} height={10} className="w-[1.3vh] mr-[1vh]" />
                                    Raça
                                </span>
                                <input disabled={props.actionButton === "Remove" ? true : false} name="raca" type="text" placeholder={props.data.raca} className={`${props.actionButton === "Remove" ? "bg-custom-gray placeholder-white" : "bg-transparent"} px-[1vh] text-white font-ubuntu w-full h-[4vh] border rounded-lg border-[0.3vh] border-custom-gray mt-[1vh] mb-[1.6vh]`} />
                            </div>

                            <div className="w-full">
                                <span className="flex text-white font-ubuntu font-normal text-[2vh]">
                                    <Image src={'./cellPhoneIcon.svg'} alt="cellphone-icon" width={10} height={10} className="w-[2.5vh] mr-[1vh]" />
                                    Nascimento  <span className="ml-[0.5vh] text-custom-gray"> (aproximado)</span>
                                </span>
                                <div className="w-full">
                                    <DatePicker
                                        disabled={props.actionButton === "Remove" ? true : false}
                                        name="nascimento"
                                        fixedHeight={true}
                                        showYearDropdown
                                        placeholderText={converterDataParaString(props.data.nascimento) }
                                        dateFormat='dd-MM-yyyy'
                                        selected={selectedDate}
                                        onChange={handleChange}
                                        className={`${props.actionButton === "Remove" ? "bg-custom-gray placeholder-white text-white" : "bg-transparent"} px-[1vh] text-white font-ubuntu w-full h-[4vh] border rounded-lg border-[0.3vh] border-custom-gray mt-[1vh] mb-[1.6vh]`} />
                                </div>
                            </div>
                            <div className="h-[6vh] mt-[4vh] mb-auto">
                                <Button bgColor={props.actionButton === "Remove" ? "Red" : "Blue"} action={action[props.actionButton]} iconPath={props.icon} insideText={props.actionButton === "Edit" ? "Salvar" : props.ModalTitle} isOpenModel={false} openModel={props.onClose} />
                            </div>

                        </div>

                    </div>
                </form>

            </div>
        </div>

    )
}
