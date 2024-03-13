import styles from "../../styles/card.module.css"
export const Cards = ()=>{
    
    return(
        <>
        <div className={styles.card__contains}>
            <img src="image/bg_card.svg" className={styles.card__bg}/>
            <img src="image/image_gt.svg" className={styles.card__animal}/>
            <div className={styles.card__div}>
            <p>Nome animal</p>
            <p>Nome dono</p>
            </div>
            <img src="image/seta_baixo.svg" className={styles.card__seta}/>
        </div>
        </>
    )
}