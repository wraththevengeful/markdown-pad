import mainlogo from '../assets/icons/mainlogo.svg'
import leafImage from '../assets/homeimage.png'
import './Header.css'
import { Outlet } from 'react-router'

function Header() {
    return (
        <>
            <header id='fullUseHeader'>
                <img src={mainlogo} alt="Markdown Pad" />
                <img src={leafImage} alt="" />
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Header