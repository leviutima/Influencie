import Header from "@/components/Header"
import style from './Contact.module.css'
import Button from "@/components/Button"
import Section from "@/components/Section"
import team from '../../../public/images/team.png'
import Image from "next/image"


function Contact() {
    return(
        <>
        <Header/>
        <section className={style.container}>
            <div className={style.title}>
                <h2>PRENCHA O FORMULÁRIO PARA FALAR COM NOSSO TIME</h2>
                <Image src={team} alt='equipe' width='700' height='400'></Image>
            </div>
            <div className={style.form}>
                <div className={style.list}>
                <div>
                    <label className={style.label}>Nome</label>
                    <input type='text' placeholder='Digite seu nome...' className={style.input}></input>
                </div>
                <div>
                    <label className={style.label}>Sobrenome</label>
                    <input type='text' placeholder='Digite seu sobrenome...' className={style.input}></input>
                </div>
                <div>
                    <label className={style.label}>Email</label>
                    <input type='email' placeholder='Digite seu email  'className={style.input}></input>
                </div>
                <div className={style.inputTextWrapper}>
                    <label className={style.label}>Sua mensagem</label>
                    <input type='text' placeholder='Digite sua mensagem'className={style.inputText}></input>
                </div>
                <Button>ENVIAR</Button>
                </div>
            </div>
        </section>
        </>

    )
}

export default Contact