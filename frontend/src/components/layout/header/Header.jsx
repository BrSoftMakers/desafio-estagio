import styles from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <header className={styles.header_container}>
            <h1>LocaR</h1>
            <div>
                <Link to='/'>Home</Link>
            </div>
        </header>
    )
}