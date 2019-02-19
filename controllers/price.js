let Price = require('../models/price');
let ObjectId = require('mongoose').Types.ObjectId;


exports.get_all_prices = function(req, res, next) {

    console.log(req.params.id);
    
    Price.find({
            id_product: ObjectId(req.params.id)
        }).lean().exec()
        .then(prices => {
        	res.status(200).json({ prices })
        })
        .catch(err => next(err));
};