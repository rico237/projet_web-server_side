var Product         = require('../models/product');
var testProducts    = require('../json/test.json');
var allergens       = require('../json/allergens.json');

// Test route
exports.test = function (req, res, next) {
    res.status(200).json({ testProducts });
};

exports.product_create = function (req, res, next) {
    var product = new Product(
        {
            name: req.body.countries
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_allergens_all = function(req, res, next) {
    res.status(200).json({allergens});
    /*Product.find()
            .distinct('allergens_from_ingredients')
            .then(allergens => {
                res.status(200).json({allergens})
            })
            .catch(err => {
                next(err)
            })*/
};

exports.find_products_with_allergens = function(req, res, next) {
    let array = req.body.tabs;

    if (Array.isArray(array) && array != undefined) {
        Product.find({ allergens_from_ingredients: { "$in" : array } })
        .limit(50).lean().exec()
        .then(products => res.status(200).json({products}))
        .catch(err => next(err))
    } else {
        res.send('Data type not conform')
    }
};

exports.find_ingredients_from_products_with_allergens = function(req, res, next) {
    let array = req.body.tabs;

    if (Array.isArray(array) && array != undefined) {
        Product.find({ allergens_from_ingredients: { "$in" : array } }, "_id ingredients")
        .limit(50)
        .lean().exec()
        .then(products => res.status(200).json({products}))
        .catch(err => next(err))
    } else {
        res.send('Data type not conform')
    }
};

exports.product_additives = function(req, res, next) {
    Product.findById(req.params.id, "additives_tags -_id").lean().exec()
        .then(additives => res.status(200).json({additives}))
        .catch(err => next(err))
};

exports.product_ingredients = function(req, res, next) {
    Product.findById(req.params.id, "ingredients -_id").lean().exec()
        .then(ingredients => res.status(200).json({ingredients}))
        .catch(err => next(err))
}

exports.product_ingredients_description = function(req, res, next) {
    Product.findById(req.params.id, "ingredients_text_with_allergens -_id").lean().exec()
        .then(ingredients => res.status(200).json({ingredients}))
        .catch(err => next(err))
}



exports.product_find_all = function (req, res, next) {
    Product.find({}).limit(10).exec()
            .then(products => res.status(200).json({ products }) )
            .catch(err => next(err));
};

exports.product_details = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};