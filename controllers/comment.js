let Comment = require('../models/comment');

exports.create = function (req, res, next) {
    let comm = new Comment(
        {
            name: req.body.countries
        }
    );

    comm.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Comment Created successfully')
    })
};

