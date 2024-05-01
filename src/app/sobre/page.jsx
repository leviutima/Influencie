import Header from "@/components/Header"
import Section from "@/components/Section"
import sobre from  '../../../public/images/about.png'

function Sobre () {
    return(
        <>
            <Header/>
            <Section text='Quem somos nós?' imgUrl={sobre}/>
        </>
    )
}

export default Sobre