const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user_controller');
const db = require('../db/queries');

const jwt = require('jsonwebtoken');
const passport = require('passport');
require('dotenv').config();

// Login route
userRouter.post('/login', userController.userLogin);


userRouter.post('/test', userController.authenticateToken, (req, res)=>{
    console.log(req.user);
    res.json(req.user)
});


module.exports = userRouter;
