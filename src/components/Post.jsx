import './Post.css'

function Post({postTitle, postAuthor, postDesc, postCategory}){
    return(
        <article className='postTile'>
            <div className="postTitleAuthor">
                <h2 className="postTitles">{postTitle}</h2>
                <p className="postAuthor">{postAuthor}</p>
            </div>
            <p className="postDesc">{postDesc}</p>
            <p className="postCategory">{postCategory}</p>
        </article>
    )
}

export default Post