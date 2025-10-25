const db = require('../db/queries')

async function getAllUsers(req, res) {
    if (!req.user.admin) {
        return res.status(403).json({ message: "User Not Authorized" });
    }
    else if (req.user.admin) {
        const users = await db.getAllUsersFromDB();
        return res.json(users);
    } else{
        res.status(404).json({ message: "Internal Error" })
    }
}

async function authorizeUser(req, res) {
    if (!req.user.admin) {
        return res.status(403).json({ message: "User Not Authorized" });
    }
    else if (req.user.admin) {
        const userid = req.params.userid;
        await db.authorizeUserInDB(userid);
        res.json({message:"User Authorized"});
    } else{
        res.status(404).json({ message: "Internal Error" })
    }
}

async function deAuthorizeUser(req, res) {
    if (!req.user.admin) {
        return res.status(403).json({ message: "User Not Authorized" });
    }
    else if (req.user.admin) {
        const userid = req.params.userid;
        await db.deAuthorizeUserInDB(userid);
        res.json({message:"User Deauthorized"});
    } else{
        res.status(404).json({ message: "Internal Error" })
    }
}


async function getAllPostsAsAdmin(req, res) {
    if (!req.user.admin) {
        return res.status(403).json({ message: "User Not Authorized" });
    }
    else if (req.user.admin) {
        const posts = await db.getAllPostsFromDBAsAdmin();
        res.json(posts);
    }else{
        res.status(404).json({ message: "Internal Error" })
    }
}


async function publishAPost(req, res) {
    if (!req.user.admin) {
        return res.status(403).json({ message: "User Not Authorized" });
    }
    else if (req.user.admin) {
        const postid = req.params.postid;
        await db.publishAPostInDB(postid);
        res.json({message:"Post Published"});
    }else{
        res.status(404).json({ message: "Internal Error" })
    }
}


async function unPublishAPost(req, res) {
    if (!req.user.admin) {
        return res.status(403).json({ message: "User Not Authorized" });
    }
    else if (req.user.admin) {
        const postid = req.params.postid;
        await db.unpublishAPostInDB(postid);
        res.json({message:"Post Unpublished"});
    }else{
        res.status(404).json({ message: "Internal Error" })
    }
}



module.exports = {
    getAllUsers,
    authorizeUser,
    deAuthorizeUser,
    getAllPostsAsAdmin,
    publishAPost,
    unPublishAPost
}