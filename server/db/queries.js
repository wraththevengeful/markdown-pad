const pool = require('./pool')

async function addNewUserToDB(userdetails) {
    await pool.query('INSERT INTO users (email, password_hash) VALUES ($1, $2)',
        [userdetails.email, userdetails.password_hash]
    )
}

async function retrieveAnUser(username) {
    const {rows} = await pool.query('SELECT * FROM users WHERE email = $1',[username]);
    return rows[0];
};

async function getAllPostsFromDB() {
    const {rows} = await pool.query('SELECT * FROM posts');
    const publishedPosts = rows.filter((post) => post.published);
    return publishedPosts;
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

async function getAllUsersFromDB() {
    const {rows} = await pool.query('SELECT email, admin, authorized FROM users');
    return rows;
}

async function authorizeUserInDB(userid){
    await pool.query('UPDATE users SET authorized = TRUE where email = $1',[userid]);
}

async function deAuthorizeUserInDB(userid){
    await pool.query('UPDATE users SET authorized = FALSE where email = $1',[userid]);
}

async function getAllPostsFromDBAsAdmin() {
    const {rows} = await pool.query('SELECT * FROM posts');
    return rows;
}

async function publishAPostInDB(postid) {
    await pool.query('UPDATE posts SET published = TRUE WHERE id = $1',[postid]);
}

async function unpublishAPostInDB(postid) {
    await pool.query('UPDATE posts SET published = FALSE WHERE id = $1',[postid]);
}

module.exports = {
    addNewUserToDB,
    retrieveAnUser,
    getAllPostsFromDB,
    getOnePostFromDB,
    getCommentsForPostFromDB,
    postNewPostInDB,
    verifyOriginalAuthor,
    updatePostInDB, 
    postNewCommentInDB,
    getAllUsersFromDB,
    authorizeUserInDB,
    deAuthorizeUserInDB,
    getAllPostsFromDBAsAdmin,
    publishAPostInDB,
    unpublishAPostInDB
}