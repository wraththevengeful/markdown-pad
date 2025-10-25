const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('../node_modules/bcryptjs/umd');
require('dotenv').config();
const db = require('../db/queries')

// Authentication function
async function authenticateToken (req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // "Bearer <token>"
    
    if(!token) res.status(401).json({message:"Access Denied"});

    jwt.verify(token, process.env.JWT_SECRET, (err,userdecoded)=>{
        if(err) return res.sendStatus(403);

        // console.log(userdecoded);

        // verify db user here if you decide to

        req.user = userdecoded;
        next();
    })
};



async function userLogin(req, res, next) {
    passport.authenticate('local', { session: false }, (err, user, info) => {

        // CONSOLE LOG HERE
        console.log(user);

        if (err) {
            return res.status(401).json({ message: info?.message });
        }

        if(!user){
            return res.status(401).json({message:info?.message || "No user found"});
        }

        // Create JWT payload
        const payload = { email: user.email, admin: user.admin, authorized:user.authorized };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30m' });

        // Return token
        return res.json({ token });

    })(req, res, next);
};

async function userSignup(req, res) {
    if(!(req.body.email) || !(req.body.password)) return res.json({message:"Missing Fields"});
    const password_hash = await bcrypt.hash(req.body.password, 10);
    const userdetails = {
        email:req.body.email,
        password_hash: password_hash
    }
    await db.addNewUserToDB(userdetails);
    res.json({message:"User Created"});
}

module.exports = {
    authenticateToken,
    userLogin,
    userSignup
}