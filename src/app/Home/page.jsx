import Header from "@/components/Header"
import Main from "@/components/Section"
import influencer from '../../../public/images/influencer.png'

function Home () {
    return(
        <>
            <Header/>
            <Main imgUrl={influencer} text='NÓS AJUDAMOS SEU SONHO SE TORNAR REALIDADE!'/>
        </>
    )
}

export default Home