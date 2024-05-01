import Header from "@/components/Header"
import Section from "@/components/Section"
import influencer from '../../../public/images/influencer.png'

function Home () {
    return(
        <>
            <Header/>
            <Section imgUrl={influencer} text='NÓS AJUDAMOS SEU SONHO SE TORNAR REALIDADE!'/>
        </>
    )
}

export default Home