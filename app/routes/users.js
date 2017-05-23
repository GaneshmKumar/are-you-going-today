var express = require('express');
var passport = require('passport');

var verify = require('../common/verify');

var usersRouter = express.Router();

usersRouter.get('/auth/twitter', passport.authenticate('twitter', { scope : ['profile'] }));

usersRouter.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
        successRedirect : '/home',
        failureRedirect : '/'
}));

usersRouter.get('/logout', (req, res, next) => {
	req.logout();
	res.redirect('/');
});

module.exports = usersRouter;