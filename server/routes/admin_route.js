const express = require('express')
const adminRouter = express.Router();
const adminController = require('../controllers/admin_controller');
const {authenticateToken} = require('../controllers/user_controller');

adminRouter.get('/users', authenticateToken, adminController.getAllUsers());


module.exports = adminRouter;