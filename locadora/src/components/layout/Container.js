import styles from './Container.module.css'


function Container(props){
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}></div>
    )


}

export default Container