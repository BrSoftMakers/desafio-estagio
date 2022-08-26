import styles from './FormUpdate.module.css'
import {useState, useEffect} from 'react'
import Api from '../../api/Api'
import Message from '../layout/message/Message'


export default function FormUpdate({veiculo_id}){

    const [veiculo, setVeiculo] = useState({})
    const [showMessage, setShowMessage] = useState(false)
    const {pegarVeiculo, atualizarVeiculo} = Api()

    
    useEffect(() => {
        pegarVeiculo(veiculo_id, setVeiculo)
        
    }, [])

   
    function handleOnChange(e){
        setVeiculo({...veiculo, [e.target.name]: e.target.value})
    }

    function handleOnChangeSelect(e){
        setVeiculo({...veiculo, [e.target.name]: e.target.options[e.target.selectedIndex].value})
    }

    function validation(dados){
        for(let key of Object.keys(dados)){

            if(dados[key] === '') return false
        }

        return true
    }

    function atualizar(e){
        e.preventDefault()
        const isValid = validation(veiculo)
        if(!isValid){
            window.alert('Por favor, preencha todos os campos!') 
            return 
        } 

        atualizarVeiculo(veiculo)
        setShowMessage(!showMessage)
    }

    return (
        <div className={styles.container}>
            {showMessage ? (<Message text="Veículo atualizado!"/>) : (<h2>Atualizar Veículo</h2>)}
            <div className={styles.container_form}>
                <form onSubmit={atualizar}>
                    <label>Modelo</label>
                    <div>
                        <input onChange={handleOnChange} type="text" name="modelo"  value={veiculo.modelo}/>
                    </div>
                    <label>Marca</label>
                    <div>
                        <input onChange={handleOnChange} type="text"  name="marca" value={veiculo.marca}  />
                    </div>

                    <label>Tipo</label>
                    <div>
                        <select onChange={handleOnChangeSelect}  name="tipo" >

                            {veiculo.tipo === 'Hatch' && 
                                <>
                                <option value="Hatch" selected>Hatch</option>
                                <option value="Sedan">Sedan</option>
                                <option value="SUV">SUV</option>
                                </>
                            }

                            {veiculo.tipo === 'Sedan' && 
                                <>
                                <option value="Hatch">Hatch</option>
                                <option value="Sedan" selected>Sedan</option>
                                <option value="SUV">SUV</option>
                                </>
                            }

                            {veiculo.tipo === 'SUV' && 
                                <>
                                <option value="Hatch">Hatch</option>
                                <option value="Sedan">Sedan</option>
                                <option value="SUV" selected>SUV</option>
                                </>
                            }
                        </select>
                    </div>
                    

                    <label>Status</label>
                    <div>
                        
                        <select onChange={handleOnChangeSelect}  name="status" >
                            {veiculo.status === 'Disponível' ? (
                                <>
                                <option value="Disponível" selected>Disponível</option>
                                <option value="Indisponível">Indisponível</option>
                                </>
                                
                            ) : (
                                <>
                                <option value="Disponível">Disponível</option>
                                <option value="Indisponível" selected>Indisponível</option>
                                </>
                                
                            )}
                            
                        </select>
                    </div>
                    <button type="submit">Salvar</button>
                </form>
                
            </div>
            
        </div>
    )
}