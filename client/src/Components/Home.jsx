import Footer from "./Footer"
import './Home.css'
import homeimage from '../assets/images/home.png'
import {Link} from "react-router";


function HomeHeader(){
    return (
        <header className="headerHome">
            <div id="mainLogoHome">
                <h1># markdown-pad</h1>
            </div>
            <div id="navButtons">
                <a href="#">About Us</a>
                {/* <a href="#" className="buttonLink">Sign in</a> */}
            </div>
        </header>
    )
}


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
            <HomeHeader></HomeHeader>
            <HomeBody></HomeBody>
            <Footer isFixed={true}></Footer>
        </>
    )
}

export default Home