import mainLogo from '../assets/icons/mainlogo.svg'
import './Home.css'
import homeimage from '../assets/homeimage.png'
import { Link } from 'react-router';

function HomeHeader() {

    return (
        <header id='homeHeader'>
            <img src={mainLogo} alt={"#markdown-pad"} />

            <div id="homeLinks">
                <a href="#">About us</a>
                <a href="#">Sign in</a>
            </div>
        </header>
    );
}

function HomeBody() {
    return (
        <main id='introHomeMain'>
            <div id="homeText">
                <p className="smallRedText">The blog is</p>
                <p className="largeGreenText">Green, clean and uses fancy words when not crashing out.</p>
                <p className="smallRedText">probably the Incredible Hulk of blog pages.</p>
                <Link to='/main'>Explore Posts</Link>
            </div>
            <div id="homeImage">
                <img src={homeimage} alt="" />
            </div>
        </main>
    )
}

function HomeFooter() {
    return (
        <footer>
            <div className="footerLinks">
                <a href="">Help</a>
                <a href="">Credits</a>
                <a href="">Raise an Issue</a>
                <a href="">Contact Me</a>
            </div>
        </footer>
    )
}

function Home() {
    return (
        <>
            <HomeHeader></HomeHeader>
            <HomeBody></HomeBody>
            <HomeFooter></HomeFooter>
        </>
    )
}

export default Home