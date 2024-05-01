import Link from "next/link"
import Button from "../Button"
import MenuNav from "../MenuNav"
import style from './Header.module.css'

function Header () {
    return(
        <header className={style.header}>
            <h1>INFLUENCIE</h1>
            <MenuNav/>
            <Link href='/Contact' className={style.link}>
            <Button>Contate-nos</Button>
            </Link>
        </header>
    )
}

export default Header