import './Search.css'

function Search(){
    return(
        <div className="searchBar">
            <h2>Search</h2>
            <form action="">
                <input type="text" name="searchTerm" id="searchTerm" />
                <input type="submit" value="Search" id='searchButton'/>
            </form>
        </div>
    )
}

export default Search