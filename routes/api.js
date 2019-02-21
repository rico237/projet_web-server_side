var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/db');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");
var Comment = require("../models/comment");

router.post('/signup', function(req, res) {
	if (!req.body.username || !req.body.password) {
		res.json({success: false, msg: 'Please pass username and password.'});
	} else {
		var newUser = new User({
			username: req.body.username,
			password: req.body.password
		});
    // save the user
    newUser.save(function(err) {
    	if (err) {
    		return res.json({success: false, msg: 'Username already exists.'});
    	}
    	res.json({success: true, msg: 'Successful created new user.'});
    });
}
});

router.post('/signin', function(req, res) {
	User.findOne({
		username: req.body.username
	}, function(err, user) {
		if (err) throw err;

		if (!user) {
			res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
		} else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
      	if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
      } else {
      	res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
      }
  });
  }
});
});

router.post('/comment', passport.authenticate('jwt', { session: false}), function(req, res) {
	var token = getToken(req.headers);
	if (token) {
		console.log(req.body);
		var newComment = new Comment({
			content : req.body.content ,
            author_id: req.body.author_id ,
            recette_id : req.body.recette_id
		});

		newComment.save(function(err) {
			if (err) {
				return res.json({success: false, msg: 'Save comment failed.'});
			}
			res.json({success: true, msg: 'Successful created new comment.'});
		});
	} else {
		return res.status(403).send({success: false, msg: 'Unauthorized.'});
	}
});

router.get('/comments', passport.authenticate('jwt', { session: false}), function(req, res) {
	var token = getToken(req.headers);
	if (token) {
		Comment.find(function (err, comments) {
			if (err) return next(err);
			res.json(comments);
		});
	} else {
		return res.status(403).send({success: false, msg: 'Unauthorized.'});
	}
});

getToken = function (headers) {
	if (headers && headers.authorization) {
		var parted = headers.authorization.split(' ');
		if (parted.length === 2) {
			return parted[1];
		} else {
			return null;
		}
	} else {
		return null;
	}
};

module.exports = router;