'use client'

import Image from "next/image"

interface ButtonProps {
    insideText: string,
    bgColor: "Blue" | "White" | "Red",
    iconPath: string,
    action: () => void,
    isOpenModel: boolean,
    openModel?: (openModalContent: Function) => void
}


export default function Button(props: ButtonProps) {


    function action() {
        if (props.isOpenModel && props.openModel) {
            props.openModel(props.action);
        } else {
            props.action();
        }
    }

    const icon = <Image src={props.iconPath} alt="add-icon" width={20} height={20} className="p-0.5" />

    let buttonDefaulClass = "flex rounded-lg text-center font-ubuntu font-semibold text-sm w-full h-full  justify-center items-center"

    const ColorDecision = {
        "Blue": "bg-degrade-blue text-white ".concat(buttonDefaulClass),
        "White": "bg-[#FFFFFF] text-degrade-blue ".concat(buttonDefaulClass),
        "Red": "bg-[#ED254E] text-white ".concat(buttonDefaulClass),
    }

    return (
        <button
            onClick={action}
            className={ColorDecision[props.bgColor]}>

            {icon} <span className={props.bgColor === "White" ? "bg-degrade-blue text-transparent bg-clip-text" : ""}>{props.insideText}</span>

        </button>
    )
}