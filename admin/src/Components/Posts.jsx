import './Posts.css'

// postdetailsprops must have : title, author, description, category
const postdetailsprops = {
    title:"Test Title",
    author:"wraththevengeful",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit, suscipit mollitia dicta nobis consequatur illo ea iusto itaque minima numquam voluptas quo nam cupiditate! Quidem at ducimus dolorum nobis.",
    category:"Humour"
}
function Post(/*postdetailsprops*/){
    return(
        <article className='postArticle'>
            <div className="postArticleHeading">
                <h3 className='postTitle'>{postdetailsprops.title}</h3>
                <p className='postAuthor'>{postdetailsprops.author}</p>
            </div>
            <div className='postDesc'>
                <p>{postdetailsprops.description}</p>
            </div>
            <div className="postCategory">
                <p>{postdetailsprops.category}</p>
            </div>
        </article>
    )
}


function Posts(){
    return(
        <section id='PostsSection'>
            <h2>Posts</h2>
            <div id='PostsContainer'>
                <Post></Post>
            </div>
        </section>
    )
}

export default Posts