import { useState, useEffect } from "react"
import LogoCar from '../../assets/car.png'
import Api from "../../api/Api"
import styles from './VeiculoInfo.module.css'

export default function VeiculoInfo({veiculo_id}){

    const [veiculo, setVeiculo] = useState({})
    const {pegarVeiculo} = Api()

    useEffect(() => {
        pegarVeiculo(veiculo_id, setVeiculo)
        console.log(veiculo_id)
    }, [])
    


    return (

        <div className={styles.container}>
            <div className={styles.container_veiculo}>
                <div class={styles.container_veiculo_img}>
                    <img src={LogoCar} alt="Logo do Carro" />
                </div>
                <div className={styles.container_veiculo_info}>
                    <p><span>Código:</span>{veiculo.id}</p>
                    <p><span>Modelo:</span>{veiculo.modelo}</p>
                    <p><span>Marca:</span>{veiculo.marca}</p>
                    <p><span>Tipo:</span>{veiculo.tipo}</p>
                    <p><span>Status: </span><span className={veiculo.status === 'Disponível' ? styles.status_green : styles.status_red}>{veiculo.status}</span></p>
                </div>
            </div>
            
        </div>
        
    )
}