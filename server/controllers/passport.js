const passport = require(`passport`);
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require('../db/queries');

async function authenticateWithDB(email, password, done) {
    try {
        const user = await db.retrieveAnUser(email);
        if (!user) return done(null, false, { message: 'incorrect email' });

        // change later
        const isAMatch = user.password_hash == password;

        if (!isAMatch) return done(null, findPackageJSON, { message: "Incorrect Password" });

        const { password_hash, ...safeUser } = user;
        return done(null, safeUser);

    } catch (err) {
        return done(err);
    }
}

const customFields = {
    usernameField: 'email',
    passwordField: 'password'
}

passport.use(new LocalStrategy(customFields, authenticateWithDB));

passport.serializeUser((user, done) => done(null, user.email));

passport.deserializeUser(async (email, done) => {
    try {
        const userfromdb = await db.retrieveAnUser(email);
        const user = {
            email : userfromdb.email,
        };
        done(null, user);
    }
    catch (err) {
        done(err);
    }
});

module.exports = passport;