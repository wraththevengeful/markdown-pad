const express = require('express');
const postsRouter = express.Router();
const postsController = require('../controllers/posts_controller');
const {authenticateToken} = require('../controllers/user_controller');

postsRouter.get('/', postsController.getAllPosts); // get all posts
postsRouter.get('/:postid', postsController.getOnePost); // Get a single post
postsRouter.get('/:postid/comments', postsController.getCommentsForPost); //get comments for a single post


// expects a json with title, content and needs authorization
postsRouter.post('/new', authenticateToken, postsController.postNewPost);
postsRouter.post('/update/:postid', authenticateToken, postsController.updatePost);

// new comment
postsRouter.post('/:postid/comments/new', postsController.postNewCommentForPost);

module.exports = postsRouter