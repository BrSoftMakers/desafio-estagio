import Image from "next/image";


export default function Logo() {
    return (
        <Image
            src={'/logo.svg'}
            alt="Logo SoftPet"
            width={182}
            height={48}
            style={{ height: '25%', width: '15%' }}
        />

    )
}