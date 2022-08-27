import {Link} from 'react-router-dom'
import styles from './VeiculoCard.module.css'
import LogoCar from '../../assets/car.png'
import {BsPencil, BsTrash, BsEye} from 'react-icons/bs'
import Api from '../../api/Api'


export default function VeiculoCard({veiculo, handleRemove}){
    const {excluirVeiculo} = Api()

    function excluir(){
        excluirVeiculo(veiculo.id)
        handleRemove(veiculo.id)
    }

    return (
        <div className={styles.veiculo_container}>
            <div className={styles.veiculo_img_container}>
                <img src={LogoCar} alt="Logo Carro" />
            </div>

            <div className={styles.veiculo_info_container}>
                <p><span>Modelo:</span>{veiculo.modelo}</p>
                <p><span>Marca:</span>{veiculo.marca}</p>
                <p><span>Tipo:</span>{veiculo.tipo}</p>
            </div>
            <div className={styles.veiculo_icons_container}>
                
                <Link to={`/veiculo/update/${veiculo.id}`}>
                    <div className={styles.icon_container}>
                        <BsPencil /> 
                        <span>Editar</span>
                    </div>
                </Link>
                <Link to={`/veiculo/${veiculo.id}`}>
                    <div className={styles.icon_container}>
                        <BsEye/> 
                        <span>Visualizar</span>
                    </div>
                </Link>
                
                <div onClick={excluir} className={styles.icon_container}>
                    <BsTrash  /> 
                    <span>Excluir</span>
                </div>
                
                
            </div>
        </div>
    )
}