var express = require('express');
var request = require('request');
var fs = require('fs');

var verify = require('../common/verify');

var homeRouter = express.Router();

homeRouter.route('/')
	.get((req, res, next) => {
		if(req.user)
		{
			var token = verify.getToken(req.user);
			res.render('home', {token: token});
		}
		else
		{
			res.redirect('/');
		}
	})
	.post((req, res, next) => {
		var city = req.body.city;
		var googlePlacesKey = process.env.GOOGLE_PLACES_KEY;
		var apiURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${city}&key=${googlePlacesKey}`;
		request(apiURL, function (error, response, body) {
  			res.json(body);
		});
	});
	
module.exports = homeRouter;