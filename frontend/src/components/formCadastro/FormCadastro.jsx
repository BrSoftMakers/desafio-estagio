import styles from './FormCadastro.module.css'
import {useForm} from 'react-hook-form'
import {useState} from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Api from '../../api/Api'
import Message from '../layout/message/Message'


const validationMessage = 'Este campo é obrigatório.'

const validation = yup.object().shape({
    modelo: yup.string().required(validationMessage),
    marca: yup.string().required(validationMessage),
    tipo: yup.string().required(validationMessage),
    status: yup.string().required(validationMessage),
})

export default function FormCadastro(){

    const {adicionarVeiculo} = Api()
    const [showMessage, setShowMessage] = useState(false)
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validation)
    })

    
    function addVeiculo(veiculo){
        adicionarVeiculo(veiculo)
        setShowMessage(!showMessage)
    }

    return (
        <div className={styles.container}>
            {showMessage ? (<Message text="Veículo cadastrado!" type="sucesso"/>) : (<h2>Cadastro Veículo</h2>)}
            <div className={styles.container_form}>
                
                <form onSubmit={handleSubmit(addVeiculo)}>
                    <label>Modelo</label>
                    <div>
                        <input type="text"  name="modelo" {...register("modelo")}/>
                        <span className={styles.error_message}>{errors.modelo?.message}</span>
                    </div>
                    <label>Marca</label>
                    <div>
                        <input  type="text" name="marca" {...register("marca")}/>
                        <span className={styles.error_message}>{errors.marca?.message}</span>
                    </div>
                    <label>Tipo</label>
                    <div>
                        {/* <input type="text" name="tipo" {...register("tipo")} /> */}
                        <select name="tipo" {...register("tipo")}>
                            <option value="Hatch">Hatch</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                        </select>
                        
                    </div>


                    <label>Status</label>
                    <div>
                        <select name="status" {...register("status")}>
                            <option value="Disponível">Disponível</option>
                            <option value="Indisponível">Indisponível</option>
                        </select>
                        
                    </div>

                   
                    <button type="submit">Cadastrar</button>
                </form>
                
            </div>
            
        </div>
    )
}