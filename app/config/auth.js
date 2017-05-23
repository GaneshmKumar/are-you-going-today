'use strict';
var dotenv = require('dotenv');
dotenv.load();

module.exports = {
		'consumerKey': process.env.TWITTER_KEY,
		'consumerSecret': process.env.TWITTER_SECRET,
		'callbackURL': process.env.CALLBACK_URL,
		'jwtSecretKey': process.env.SECRET_KEY
};
