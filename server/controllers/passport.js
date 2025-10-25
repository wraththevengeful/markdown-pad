const passport = require(`passport`);
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require('../db/queries');

const customFields = {
    usernameField: 'email',
    passwordField: 'password'
}

async function authenticateWithDB(email, password, done) {
    try {
        const user = await db.retrieveAnUser(email);
        if (!user) return done(null, false, { message: "No user found" });

        const isAMatch = (user.password_hash == password);

        if (!isAMatch) return done(null, false, { message: "wrong password" });

        return done(null, { email: user.email, admin: user.admin, authorized: user.authorized });
    } catch (err) {
        return done(err);
    }
}

passport.use('local', new LocalStrategy(customFields, authenticateWithDB));

module.exports = passport;