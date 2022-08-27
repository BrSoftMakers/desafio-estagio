import FormUpdate from "../components/formUpdate/FormUpdate"
import { useParams } from "react-router-dom"


export default function UpdateVeiculo(){
    const {id} = useParams()

    return (
        <div>
            <FormUpdate veiculo_id={id}/>
        </div>
    )
}