const db = require('../db/queries')

async function getAllPosts(req, res) {
    const posts = await db.getAllPostsFromDB();
    res.json(posts);
}

async function getOnePost(req, res) {
    const postid = req.params.postid;
    const post = await db.getOnePostFromDB(postid);
    if(!post) res.status(404).json({message: "Resource Not found"});
    res.json(post);
}

async function getCommentsForPost(req, res) {
    const postid = req.params.postid;
    const comments = await db.getCommentsForPostFromDB(postid);
    res.json({comments});
}

async function postNewCommentForPost(req,res) {
    const comment = {postid : req.params.postid, ...req.body};
    if(!comment) res.json({message:"No comment sent"});
    await db.postNewCommentInDB(comment);
    res.json({message:"Comment added"});
}

async function postNewPost(req, res) {
    const user = req.user;

    if((user && user.authorized) || (user && user.admin)){
        const newPost = {email: user.email, ...req.body};
        await db.postNewPostInDB(newPost);
        res.json({message:"Post Added", post: {title:newPost.title, author:newPost.email}});
    }

    if(!user || !user.authorized){
        res.status(403).json({message:"User not Authorized"});
    }
}

async function updatePost(req,res) {
    const user = req.user;
    const postid = req.params.postid;
    const updates = req.body;

    // Verify if the current user is the original author
    const isOGAuthor = await db.verifyOriginalAuthor(postid, user.email);
    if(isOGAuthor == null) res.status(404).json({message:"Resource not found"});
    if(!isOGAuthor) res.status(403).json({message:"Not Authorized"});

    if(isOGAuthor){
        const updatedPost = {author:user.email, id:postid, ...updates};
        await db.updatePostInDB(updatedPost);
        res.json({message:"Post updated"});
    }

    res.json({message:"Internal Error"});
}


module.exports = {
    getAllPosts,
    getOnePost,
    getCommentsForPost,
    postNewPost,
    updatePost,
    postNewCommentForPost
}