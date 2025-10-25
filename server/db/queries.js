const pool = require('./pool')

async function retrieveAnUser(username) {
    const {rows} = await pool.query('SELECT * FROM users WHERE email = $1',[username]);
    return rows[0];
};

async function getAllPostsFromDB() {
    const {rows} = await pool.query('SELECT * FROM posts');
    return rows;
}

async function getOnePostFromDB(postid) {
    const {rows} = await pool.query('SELECT * FROM posts WHERE id = $1',[postid]);
    if(rows.length == 0) return null;
    return rows[0];
}

async function getCommentsForPostFromDB(postid) {
    const {rows} = await pool.query('SELECT * FROM comments WHERE postid = $1',[postid]);
    return rows;
};

async function postNewCommentInDB(commentObj) {
    await pool.query('INSERT INTO comments (title, comment, displayname, postid) VALUES ($1,$2,$3,$4)',
        [commentObj.title, commentObj.comment, commentObj.displayname, commentObj.postid]
    )
}

async function postNewPostInDB(postObject) {
    await pool.query('INSERT INTO posts (author, title, content) VALUES ($1, $2, $3)',
        [postObject.email, postObject.title, postObject.content]
    )
}

async function verifyOriginalAuthor(postid, author) {
    const {rows} = await pool.query('SELECT * FROM posts where id = $1',[postid]);
    if(rows.length == 0) return null;
    if(rows[0].author == author) return true;
    return false;
}

async function updatePostInDB(postObject) {
    await pool.query('UPDATE posts SET title = $1, content = $2 WHERE id = $3',
        [postObject.title, postObject.content, postObject.id]
    );
}

module.exports = {
    retrieveAnUser,
    getAllPostsFromDB,
    getOnePostFromDB,
    getCommentsForPostFromDB,
    postNewPostInDB,
    verifyOriginalAuthor,
    updatePostInDB, 
    postNewCommentInDB
}