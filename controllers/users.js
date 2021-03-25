const User = require('../models/user'); 
const bcrypt = require('bcrypt');       
const SALT_ROUNDS = 10;                 

function newUser(req, res) {
    res.render('users/new');
}

function signUp(req, res) {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(SALT_ROUNDS));
    User.create(req.body, function (error, newUser) {
        console.log(newUser) // let's check out our new user
        res.redirect('/');
    });
}

// new controller action defined
function signIn(req, res) {
    res.render('users/login');
}

// here's the login action

function login(req, res) {
    User.findOne({
        username: req.body.username
    }, function (error, foundUser) {
        if (foundUser === null) {
            res.redirect('/users/signin');
        } else {
            const doesPasswordMatch = bcrypt.compareSync(req.body.password, foundUser.password);
            if (doesPasswordMatch) {
                req.session.userId = foundUser._id; // new code right here
                console.log(req.session) // we can also log out the session to see the results
                res.redirect('/');
            } else {
                res.redirect('/users/signin');
            }
        }
    });
}

module.exports = {
    new: newUser,
    signUp,
    signIn,
    login,
};