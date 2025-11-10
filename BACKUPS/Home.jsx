import Header from "./Header"
import Footer from "./Footer"
import './Home.css'
import homeimage from '../assets/images/home.png'
import {Link} from "react-router";

function HomeBody(){
    return(
        <main id="HomeBox">
            <section id="homeText">
                <p className="smallRedText">This blog is</p>
                <p className="largeGreenText">Green, clean and uses fancy words when not crashing out.</p>
                <p className="smallRedText">probably the Incredible Hulk of blog pages.</p>
                <Link to="posts" className="buttonLink">Explore Posts</Link>
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
            <Footer isFixed={true}></Footer>
        </>
    )
}

export default Home