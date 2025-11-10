import './Footer.css'

function Footer({isFixed}){
    const conditionalStatic = isFixed ? "fixedFooter" : "";
    return (
        <footer className={conditionalStatic}> 
            <a href="#">Help</a>
            <a href="#">Credits</a>
            <a href="#">Raise an Issue</a>
            <a href="#">Contact Me</a>
        </footer>
    )
}

export default Footer