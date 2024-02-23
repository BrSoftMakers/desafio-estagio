import Image from "next/image";

export default function Logo(){
    return(
            <Image 
            src={"logo.svg"}
            alt="Logo da soft pet"
            width={0}
            height={0}
            className="w-full h-full max-h-[48px] max-w-[182px]"
            style={{
                objectFit: "contain"
            }}
        />
    )
}