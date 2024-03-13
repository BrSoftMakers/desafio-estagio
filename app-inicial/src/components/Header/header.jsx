import styles from "../../styles/header.module.css"

export const Header = ()=>{
    return(
        <header className={styles.header}>
            <img src="/image/logo.svg" alt="logo" className="header__logo"/>          
        </header>
    )
}