import Header from "./Header"
import Footer from "./Footer"
import './Home.css'
import homeimage from '../assets/images/home.png'

function HomeBody(){
    return(
        <main>
            <section id="homeText">
                <p className="smallRedText">This blog is</p>
                <p className="largeGreenText">Green, clean and uses fancy words when not crashing out.</p>
                <p className="smallRedText">probably the Incredible Hulk of blog pages.</p>
                <a href="#" className="buttonLink">Explore Posts</a>
            </section>
            <section id="homeImage">
                <img src={homeimage} alt="Image of a leaf" />
            </section>
        </main>
    )
}


function Home() {
    return (
        <>
            <Header></Header>
            <HomeBody></HomeBody>
            <Footer></Footer>
        </>
    )
}

export default Home