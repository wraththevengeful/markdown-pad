import './Recents.css'

function SingleRecentPost({postTitle, postDesc}){
    return(
        <article className="singleRecentPost">
            <h3 className="singleRecentPostTitle">{postTitle}</h3>
            <p className="singleRecentPostDesc">{postDesc}</p>
        </article>
    )
}

function Recents(){
    return(
        <aside id="recentPosts">
            <p className="recentsTitle">Recents</p>
            <SingleRecentPost postTitle={"Sample Title"} postDesc={"This is a sample body text for the article!"}></SingleRecentPost>
            <SingleRecentPost postTitle={"Sample Title"} postDesc={"This is a sample body text for the article!"}></SingleRecentPost>
            <SingleRecentPost postTitle={"Sample Title"} postDesc={"This is a sample body text for the article!"}></SingleRecentPost>
            <SingleRecentPost postTitle={"Sample Title"} postDesc={"This is a sample body text for the article!"}></SingleRecentPost>
        </aside>
    )
}

export default Recents