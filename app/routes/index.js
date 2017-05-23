'use strict';

var express = require('express');

var indexRouter = express.Router();

indexRouter.route("/")
	.get((req, res, next) => {
		res.end('success');
	});

module.exports = indexRouter;
