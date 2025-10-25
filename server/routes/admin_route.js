const express = require('express')
const adminRouter = express.Router();
const adminController = require('../controllers/admin_controller');
const {authenticateToken} = require('../controllers/user_controller');

adminRouter.get('/users', authenticateToken, adminController.getAllUsers);
adminRouter.post('/users/authorize/:userid', authenticateToken, adminController.authorizeUser);
adminRouter.post('/users/deauthorize/:userid', authenticateToken, adminController.deAuthorizeUser);

adminRouter.get('/posts', authenticateToken, adminController.getAllPostsAsAdmin);
adminRouter.post('/posts/publish/:postid', authenticateToken, adminController.publishAPost);
adminRouter.post('/posts/unpublish/:postid', authenticateToken, adminController.unPublishAPost);

module.exports = adminRouter;