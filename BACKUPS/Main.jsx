// import Header from "./Header"
import Footer from "./Footer"
import Posts from "./Posts"
import Search from "./Search"
import Recents from "./Recents"
import './Main.css'

function Main() {
    return (
        <>
            <main>

                <div className="mainGrid">
                    <div className="leftBox">
                        <Posts></Posts>
                    </div>
                    <div className="rightBox">
                        <Search></Search>
                        <Recents></Recents>
                    </div>
                </div>
            </main>
            <Footer isFixed={false}></Footer>
        </>
    )
}

export default Main