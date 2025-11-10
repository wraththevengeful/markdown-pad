import { useState } from 'react'
import './Posts.css'
import { useEffect } from 'react';

// postdetailsprops must have : title, author, description, category
const postdetailsprops = {
    title: "Test Title",
    author: "wraththevengeful",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit, suscipit mollitia dicta nobis consequatur illo ea iusto itaque minima numquam voluptas quo nam cupiditate! Quidem at ducimus dolorum nobis.",
    category: "Humour"
}

function Post({title, author, description, category}) {
    return (
        <article className='postArticle'>
            <div className="postArticleHeading">
                <h3 className='postTitle'>{title}</h3>
                <p className='postAuthor'>{author}</p>
            </div>
            <div className='postDesc'>
                <p>{description}</p>
            </div>
            <div className="postCategory">
                <p>{category}</p>
            </div>
        </article>
    )
}


function Posts() {

    // save posts
    const [posts, setPosts] = useState([]);

    // loading state 
    const [isLoading, setLoading] = useState(true);

    // error handling
    const [error, setError] = useState(null);

    // Fetch API
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const response = await fetch ('http://localhost:3000/posts');
                console.log(response);
                const data = await response.json();
                console.log(data);
                setPosts(data);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            }
            catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const postLoadingProps = {
        title: "Loading Posts",
        author: "",
        description: "Posts loading, hold on tight!",
        category: "Waiting"
    }

    console.log(isLoading);
    if (isLoading) {
        return (
            <section id='PostsSection'>
                <h2>Posts</h2>
                <div id='PostsContainer'>
                    <Post title={postLoadingProps.title} author={postLoadingProps.author} description={postLoadingProps.description} category={postLoadingProps.category}></Post>
                </div>
            </section>
        )
    };

    return (
        <section id='PostsSection'>
            <h2>Posts</h2>
            <div id='PostsContainer'>
                {posts.map(post => (
                    <Post 
                        key={post.id}
                        title={post.title}
                        author={post.author} 
                        description={post.description}
                        category={post.category}
                    />
                ))}
            </div>
        </section>
    );
}

export default Posts