import style from './Button.module.css'

function Button ({children}) {
    return(
        <div className={style.button}>{children}</div>
    )
}

export default Button