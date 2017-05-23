'use strict';

var express = require('express');
var verify = require('../common/verify');
var path = require('path');

var indexRouter = express.Router();

indexRouter.route("/")
	.get((req, res, next) => {
		res.sendFile(path.join(__dirname, '../../public/views/index.html'));
	});

module.exports = indexRouter;
