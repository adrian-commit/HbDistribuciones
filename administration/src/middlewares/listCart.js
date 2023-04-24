module.exports = (req,res,next) => {
    if (res.locals.user) {
        const userId = req.session.user.id
        res.locals.userId = req.session && req.session[userId] ? req.session[userId] : null;  
    }
    next()
}