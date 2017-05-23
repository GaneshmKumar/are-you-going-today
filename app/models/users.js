'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	id: String,
	username: String,
	displayName: String,
	token: String
},
{
	timestamps: true
}
);

module.exports = mongoose.model('User', User);
