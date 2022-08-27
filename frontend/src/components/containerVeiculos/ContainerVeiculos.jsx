import styles from './ContainerVeiculos.module.css'
import VeiculoCard from '../veiculo/VeiculoCard'
import Api from '../../api/Api'

import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function ContainerVeiculos(){

    const [veiculos, setVeiculos] = useState([])
    const {pegarVeiculos} = Api(setVeiculos)

    useEffect(() => {
        pegarVeiculos()
    }, [])

    const removeVeiculo = (id) => {
        setVeiculos(veiculos.filter(veiculo => veiculo.id !== id))
    }

    return(
        <div className={styles.container}>
            <div className={styles.container_veiculos}>
            {veiculos.length > 0 ? (
                veiculos.map(veiculo => (
                    <VeiculoCard key={veiculo.id} veiculo={veiculo} handleRemove={removeVeiculo}/>
                ))
            
                ) : (
                    <p>Não há veiculos</p>
                )}
            </div>
        
        
            <Link to='/veiculo/cadastro'>
                <button>Cadastrar</button>
            </Link>
        </div>
    )
}