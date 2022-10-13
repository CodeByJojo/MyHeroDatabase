const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')

exports.getLogin = (req, res)=> {
    if (req.user) {
        return res.redirect('/heroes')
    }
    res.render('login', {
        title: 'Login'
    })
}

exports.postLogin = (req, res, next) => {
    const validationErrors = []
    if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter valid email address!'})
    if (validator.isEmpty(req.body.password)) validationErrors.push({msg: 'Enter a password, now.'})

    if (validationErrors.length) {
        req.flash('errors', validationErrors)
        return res.redirect('/login')
    }
    req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })

    passport.authenticate('local', (err, user, info)=> {
        if (err) { return next(err) }
        if (!user) {
            req.flash('errors', info)
            return res.redirect('/login')
        }
        req.logIn(user, (err) => {
            if (err) { return next(err) }
            req.flash('Success!', {msg: 'Success! You are logged in!'})
            res.redirect(req.session.returnTo || '/heroes')
        })
    })(req, res, next)
}

exports.logout = (req, res) => {
    req.logout(() => {
        console.log('The user has now been logged out')
    })
    req.session.destroy((err) => {
        if (err) console.log('ERROR The Session was not destroyed during logout', err)
        req.user = null
        res.redirect('/')
    })
}

exports.getSignup = (req, res) => {
    if (req.user) {
        return res.redirect('/heroes')
    }
    res.render('signup', {
        title: 'Create Account'
    })
}

exports.postSignup = (req, res, next) => {
    const validationErrors = []
    if(!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Valid Email Required'})
    if(!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password is too short'})
    if(req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Password Does Not Match' })

    if (validationErrors.length) {
        req.flash('errors', validationErrors)
        return res.redirect('../signup')
    }
    req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false }) //

    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    })

    User.findOne({$or: [
        {email: req.body.email},
        {userName: req.body.userName}
    ]}, (err, existingUser) => {
        if (err) { return next(err) }
        if (existingUser) {
            req.flash('errors', {msg: 'Account already exists'})
            return res.redirect('../signup')
        }
        user.save((err) => {
            if (err) { return next(err)}
            req.logIn(user, (err) => {
                if (err) {
                    return next(err)
                }
                res.redirect('/heroes')
            })
        })
    })
}
