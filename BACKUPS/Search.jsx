import './Search.css'

function Search(){
    return(
        <section id="searchBoxOuter">
            <h2>Search</h2>
            <form action="" method="">
                <input type="text" name="search" id="searchBox" placeholder="Search posts"/>
                <input type="submit" value="Search" />
            </form>
        </section>
    )
}

export default Search