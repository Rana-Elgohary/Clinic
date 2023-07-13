import DocCard from "../Components/DocCard"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import NavBar from "../Components/NavBar"
import RememberToSign from "../Components/RememberToSign"
import Welcome from "../Components/Welcome"

function Home() {
    return(
        <>
        <NavBar></NavBar>
        <Hero></Hero>
        <Welcome></Welcome>
        <RememberToSign></RememberToSign>
        <DocCard></DocCard>
        <Footer></Footer>
        </>
    )
}

export default Home