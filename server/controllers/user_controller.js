const jwt = require('jsonwebtoken');
const passport = require('passport');
require('dotenv').config();

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
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '15m' });

        // Return token
        return res.json({ token });

    })(req, res, next);
};


module.exports = {
    authenticateToken,
    userLogin,
}