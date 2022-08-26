import styles from './Message.module.css'

export default function Message({text}){
    return (
        <p className={styles.sucesso}>{text}</p>
    )
}