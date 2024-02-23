import Image from "next/image";
import { ReactNode, useState, useEffect, useRef } from "react";
import Cardpetdetail from "./Cardpetdetail";
import Modal from "./Modal";
import Modalcontent from "./Modalcontent";

interface CardPetProps {
    buttonActionEdit: () => void;
    buttonActionRemove: () => void;
    buttonActionAdd: () => void;
    openModal: (openModalContent: Function) => void;
    closeModal: () => void;
    data: {
        id: number;
        nome_sobrenome: string;
        animal: "Cachorro" | "Gato" ;
        dono: string;
        raca: string;
        telefone: string;
        nascimento: string;
    };
    modalisOpen: boolean;
    EditIsOpen: boolean;
    addIsOpen: boolean;
    removeIsOpen: boolean;
    removePet: () => void;
    addPet: (pet:{
        nome_sobrenome: string;
        animal: "Cachorro" | "Gato" ;
        dono: string;
        raca: string;
        telefone: string;
        nascimento: string;
    }) => void;
    editPet: () => void;
}

export default function Cardpet(props: CardPetProps) {
    const catIcon = (
        <Image src={"./catIcon.svg"} alt="cat-icon" width={35.65} height={43.52} className="w-6vh h-6vh" />
    );

    const nomePet = props.data.nome_sobrenome;
    const nomeDono = props.data.dono;
    const textClass = "text-white font-ubuntu font-normal text-sm";
    const [active, setActive] = useState(false);
    const cardPetDetailRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (active && cardPetDetailRef.current && !cardPetDetailRef.current.contains(event.target as Node)) {
                setActive(false);
            }
            if (!active && cardPetDetailRef.current && !cardPetDetailRef.current.contains(event.target as Node)) {
                setActive(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [active]);

    return (
        <div>
            <div
                className={`bg-transparent hover:bg-degrade-blue h-[13vh]  w-[43vh] p-[0.5vh] rounded-lg ${
                    active ? "bg-degrade-blue" : ""
                }`}
            >
                <div className="h-full  w-full bg-degrade-dark rounded-lg flex  items-center px-3vh  ">
                    <div className="bg-degrade-blue w-8vh h-8vh rounded-full items-center flex justify-center ">
                        {catIcon}
                    </div>

                    <div className="ml-auto">
                        <div className="flex-1 flex">
                            <Image
                                src={"./collarIcon.svg"}
                                alt="collar-icon"
                                width={60}
                                height={60}
                                className="w-25/10vh mr-1vh mb-[1vh]"
                            />{" "}
                            <span className={textClass}>{nomePet}</span>
                        </div>
                        <div className="flex-1 flex">
                            <Image
                                src={"./perfilIcon.svg"}
                                alt=""
                                width={10}
                                height={10}
                                className="w-25/10vh mr-1vh"
                            />{" "}
                            <span className={textClass}>{nomeDono}</span>
                        </div>
                    </div>

                    <div className="ml-auto hover:cursor-pointer">
                        <button id="toggle" onClick={() => setActive(!active)}>
                            <Image
                                src={"./detailArrow.svg"}
                                alt="detail-arrow"
                                width={30}
                                height={30}
                                className={`w-3vh ${active ? "transform rotate-180" : ""}`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {active && (
                <div ref={cardPetDetailRef}>
                    <div className="">
                        <Cardpetdetail
                            data={props.data}
                            openModal={props.openModal}
                            buttonActionAdd={props.buttonActionAdd}
                            buttonActionEdit={props.buttonActionEdit}
                            buttonActionRemove={props.buttonActionRemove}
                        />
                    </div>
                    <Modal isOpen={props.modalisOpen}>
                        <div>
                            {props.EditIsOpen ? (
                                <Modalcontent
                                    ModalTitle="Editar"
                                    icon="./editIconWhite.svg"
                                    actionButton="Edit"
                                    removePet={props.removePet}
                                    addPet={props.addPet}
                                    editPet={props.editPet}
                                    onClose={props.closeModal}
                                    data={props.data}
                                />
                            ) : null}


                            {props.removeIsOpen ? (
                                <Modalcontent
                                    ModalTitle="Remover"
                                    icon="./trashIcon.svg"
                                    actionButton="Remove"
                                    removePet={props.removePet}
                                    addPet={props.addPet}
                                    editPet={props.editPet}
                                    onClose={props.closeModal}
                                    data={props.data}
                                />
                            ) : null}
                        </div>
                    </Modal>
                </div>
            )}
        </div>
    );
}
