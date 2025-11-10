import mainlogo from '../assets/icons/mainlogo.png'
import './Header.css'

function Header() {
    return (
        <header id="mainHeader">
            <h1 id='mainLogo'># markdown-pad</h1>
            <img src={mainlogo} alt="mainLogoImage" id="mainLogoImage" />
        </header>
    )
}

export default Header