import Image from "next/image"
import style from './Section.module.css'
import Button from "../Button"

function Section ({imgUrl, text}) {
    return(
        <>
            <div className={style.container}>
                <div className={style.titleContainer}>
                   <h2>{text}</h2> 
                </div>
                <div>
                    <Image src={imgUrl} width='950' height='600' alt='imagem cartoon de influencer'></Image>
                </div>
            </div>
        </>
    )
}

export default Section