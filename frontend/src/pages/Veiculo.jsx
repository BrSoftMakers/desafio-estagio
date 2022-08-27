import VeiculoInfo from "../components/veiculo/VeiculoInfo"
import { useParams } from "react-router-dom"

export default function Veiculo(){
    const {id} = useParams()

    return (
        <VeiculoInfo veiculo_id={id}/>
    )
}