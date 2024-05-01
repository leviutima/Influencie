import Header from "@/components/Header"
import Main from "@/components/Section"
import sobre from  '../../../public/images/about.png'

function Sobre () {
    return(
        <>
            <Header/>
            <Main text='Quem somos nós?' imgUrl={sobre}/>
        </>
    )
}

export default Sobre