var Product         = require('../models/product');
var testProducts    = require('../json/test.json');
var allergens       = require('../json/allergens.json');

const unirest = require('unirest');
const API_KEY = "574b3f73e57b94ae7bcf4b1de0f3b1ce";

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

exports.find_images_url_for_product = function(req, res, next) {
    let requestString = "https://www.food2fork.com/api/search?key="+ API_KEY +"&q=" + req.body.productName;
    let limit = req.body.limit || 5;
    
    unirest.get(requestString).end((re => {
        if (re.status == 200) {
            let result = JSON.parse(re.body);
            let urls = [];
            if (result.count != 0) {
                const recipes = result["recipes"];
                for (var i = 0; i < recipes.length; i++) {
                    if (i < limit) {
                        let reci = recipes[i];
                        let single = {
                            "name":reci.title, 
                            "url":reci.image_url
                        }
                        urls.push(single);
                    } else {
                        break;
                    }
                }
            }
            
            res.status(200).json(urls)

        } else {
            res.status(result.status);
        }
    }));

}

exports.update_product_image = function(req, res, next) {
    Product.findByIdAndUpdate(req.params.id, { $set: {product_image_url : req.body.imageUrl }}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
}

exports.find_products_with_allergens = function(req, res, next) {
    let array = req.body.tabs;
        Product.find({ allergens_from_ingredients: { "$in" : array } })
        .limit(30).lean().exec()
        .then(products => res.status(200).json({products}))
        .catch(err => next(err))
    
};

exports.find_ingredients_from_products_with_allergens = function(req, res, next) {
    let array = req.body.tabs || [];
    let query = req.body.productName;
    let regex = array.join("|");
    let prod; 

    if (typeof array !== 'undefined' && array.length > 0) {
        // array defined and is not empty
        prod = Product.find({ 
            allergens_from_ingredients: { "$regex": regex, "$options": "i" }, 
            // states : { "$not" : /^en:to-be-completed.*/ },
            // states : { "$nin" : uncomp},
            product_name: { "$regex": query, "$options": "i" } 
            // }, "_id product_name allergens_from_ingredients nutrition_grade_fr states");
        });
    } else {
        prod = Product.find({
            product_name: { "$regex": query, "$options": "i" },
            // states : { "$not" : /^en:to-be-completed.*/ },
            // states : { "$nin" : uncomp},
        })
    }

    prod.limit(30)
        .lean().exec()
        .then(products => res.status(200).json({products}))
        .catch(err => next(err))
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