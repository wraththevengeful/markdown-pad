import './Header.css'

function Header(){
    return (
        <header>
            <div id="mainLogo">
                <h1># markdown-pad</h1>
            </div>
            <div id="navButtons">
                <a href="#">About Us</a>
                <a href="#" id="signinlink">Sign in</a>
            </div>
        </header>
    )
}

export default Header