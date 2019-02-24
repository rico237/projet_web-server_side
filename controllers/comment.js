require('dotenv').config();
const Comment = require('../models/comment');
const passport = require('passport');
require('../config/passport')(passport);
const jwt = require('jsonwebtoken');
const User = require("../models/user");

const Pusher = require('pusher');
const pusher = new Pusher({
    appId: process.env.PUSHER_APPID ,
    key: process.env.PUSHER_KEY ,
    secret: process.env.PUSHER_SECRET , cluster: 'eu'
});
// const sentiment = require('sentiment')();

exports.test_pusher = (req, res) => {
    const { body } = req; const { text, name } = body;
    const data = { text, name, timeStamp: new Date() };

    try {
        pusher.trigger('comment-channel', 'new-message', data); // pusher.trigger(['comment', 'note'], 'message', data);
    } catch (e) {}

    res.json(data);
};

exports.create = function (req, res, next) {
    passport.authenticate('jwt', { session: false}), (req, res) => {
        var token = getToken(req.headers);
        if (token) {
            console.log(req.body);
            var newComment = new Comment({
                content :      req.body.content ,
                author_id :    req.body.author_id ,
                recette_id :   req.body.recette_id
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
    }
};

exports.get_all = function(req, res, next) {
    Comment.find({}).exec()
    .then(comments => res.status(200).json({ comments }))
    .catch(err => next(err));
};

exports.get_single = function(req, res, next) {
    passport.authenticate('jwt', { session: false}), function(req, res) {
        var token = getToken(req.headers);
        if (token) {
            Comment.find({}).exec()
            .then(comments => res.status(200).json({ comments }))
            .catch(err => next(err));
        } else {
            return res.status(403).send({success: false, msg: 'Unauthorized.'});
        }
    }
};

getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) 
            return parted[1];
        return null;
    } return null;
};