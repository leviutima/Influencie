import style from './MenuNav.module.css'

function MenuNav () {
    return(
        <nav>
            <ul className={style.menu}>
                <li>
                    Home
                </li>
                <li>
                    Sobre-nós
                </li>
            </ul>
        </nav>
    )
}

export default MenuNav