const pool = require('./pool')

async function retrieveAnUser(email) {
    const { rows } = await pool.query(`SELECT * FROM admins WHERE email = $1`, [email]);
    if (rows.length > 0) return rows[0];
    return null;
}


module.exports = {
    retrieveAnUser,
}