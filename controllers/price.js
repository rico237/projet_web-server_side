let Price = require('../models/price');

exports.get_all_prices = function(req, res, next) {

    console.log(req.params.id);
    
    Price.find({
            id_product: req.params.id
        })
        .then(prices => res.status(200).json({ prices }))
        .catch(err => next(err));
};