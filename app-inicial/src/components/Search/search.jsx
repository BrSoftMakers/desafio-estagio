import { useState } from "react"
import styles from "../../styles/search.module.css"
import { Register } from "../Register/register"

export const Search = () =>{
     const [isOpen, setIsOpen] = useState(false)
    
    function stadeModal (){
        if(isOpen === true){
            setIsOpen(false)
        }
        else{
            setIsOpen(true)
        }
    } 
    
    return(    
        <>
        <div className={styles.contains__search}>

            <div className={styles.search}>
               
                <img src="image/lupa.svg" alt="lupa" className={styles.search__lupa}/>
                <input type="text" className={styles.search__input}/>
                <button className={styles.search__button}>Pesquisa</button>
                
            </div>  
                <img src="image/button_cadastro.svg" alt="cadastro" className={styles.search__cadastro_btn} onClick={stadeModal} />          
        </div> 
        <Register isOpen={isOpen} setIsOpenModal={stadeModal}/>
        </>
    )
} 