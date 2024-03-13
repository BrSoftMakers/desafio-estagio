import { useState } from "react"
import styles from "../../styles/registre.module.css"

export const Register = ({isOpen, setIsOpenModal}) =>{
    
    if(isOpen){
    return(
        <>
        <div className={styles.register_bg_focal} onClick={setIsOpenModal}></div>      
        <div className={styles.register__form__contains}>
          <img src="image/bg_modal.svg" alt="modal_bg" className={styles.register__bg}/>
          <form className={styles.register__form}>
            <div className={styles.form__top}>
              <img src="image/cadastrar.svg" className={styles.img__cadastrar} alt="" srcset="" />
              <h1>Cadastro</h1>
              <img src="image/x.svg" className={styles.img__x} onClick={setIsOpenModal}/>
            </div>
            <div className={styles.form__row}>
              
              <div className={styles.form__column}>
                <label className={styles.register__label}>Nome</label>
                <input type="text" className={styles.form__input}/>
              </div>
              
              <div className={styles.form__column}>
                <label className={styles.register__label}>Animal</label>
                <input type="text" className={styles.form__input}/>
              </div>
              

            </div>
            
            <div className={styles.form__row}>
              <div className={styles.form__column}>
                <label className={styles.register__label}>Raça</label>
                <input type="text" className={styles.form__input}/>
              </div>

               <div className={styles.form__column}>
                <label className={styles.register__label}>Animal</label>
                <input type="text" className={styles.form__input}/>
              </div>
              
            </div>
            <div className={styles.form__row}>
              <div className={styles.form__column}>
                <label className={styles.register__label}>Raça</label>
                <input type="text" className={styles.form__input}/>
              </div>
             
              <div className={styles.form__column}>
                <label className={styles.register__label}>Telefone</label>
                <input type="text" className={styles.form__input}/>
              </div>

            </div>
            <div className={styles.form__row}>
                <button className={styles.button__voltar}><img src="image/button_volta.svg"/></button>
                <button className={styles.button__cadastrar}><img src="image/button_cadastrar_form.svg"/></button>
            </div>
          </form>
        </div>
      </>
      
    )}
    else{
        return null
    }
    
}