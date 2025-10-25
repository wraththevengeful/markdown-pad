const express = require('express');
const app = express();
const passport = require('./controllers/passport');
const path = require(`node:path`)
require('dotenv').config()
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

const userRouter = require('./routes/user_route');
const postsRouter = require('./routes/posts_route');
const adminRouter = require('./routes/admin_route');

// ADMIN ROUTE: SECURED;
app.use('/user', userRouter);

app.use('/posts', cors(), postsRouter);

app.use('/admin', adminRouter);

const PORT = process.env.PORT || 3000

app.listen(PORT, (err)=>{
    if(err) console.error(err);
    console.log('Server is up and running on PORT: ', PORT);
})