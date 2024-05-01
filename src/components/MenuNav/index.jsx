import Link from 'next/link'
import style from './MenuNav.module.css'

function MenuNav () {
    return(
        <nav>
            <ul className={style.menu}>
            <Link href='/' className={style.Link}>
                <li>
                    Home
                </li>
            </Link> 
            <Link href='/sobre' className={style.Link}>
                <li>
                    Sobre-nós
                </li>
            </Link> 
                <li>
                    Produtos
                </li>
            </ul>
        </nav>
    )
}

export default MenuNav