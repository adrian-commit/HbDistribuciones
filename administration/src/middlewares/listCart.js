module.exports = (req,res,next) => {
    res.locals.cart = req.session && req.session.cart ? req.session.cart : null; 
    next()
}