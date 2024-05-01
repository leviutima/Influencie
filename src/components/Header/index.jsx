import Button from "../Button"
import MenuNav from "../MenuNav"
import style from './Header.module.css'

function Header () {
    return(
        <header className={style.header}>
            <h1>INFLUENCIE</h1>
            <MenuNav/>
            <Button>Contate-nos</Button>
        </header>
    )
}

export default Header