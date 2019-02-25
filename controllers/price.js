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

exports.new_price = function(req, res) {
    console.log(req.body);
    var newPrice = new Price(req.body);
    //Save it into the DB.
    newPrice.save((err, price) => {
        if (err) {
            res.send(err);
        } else { //If no errors, send it back to the client
            res.json({ message: "Price successfully added!", price });
        }
    });
};