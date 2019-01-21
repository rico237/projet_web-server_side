var Product = require('../models/product');

tab = ["Raclette","Poulet au curry","Boeuf bourguignon","Daube","Quenelles","Cake au jambon","Petits fours au fromage","Magret de canard","Saumon à la crème","Melon nature","Moules au vin blanc","Gratin de pommes de terre","Tarte au citron","Tarte au citron meringué","Tartiflette"];
var allergens = require('../json/allergens.json');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.json({ message: tab })
};

exports.getUsers = function() {
  Product.getUsers()
  .then(docs => {
    console.log(docs)
  })
  .catch(err => {
    console.error(err)
  })
}

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
    /*Product.find({}, {'allergens_from_ingredients': 1})
        .exec()
        .then(docs => {
            res.status(200).json({docs})
        }).catch(err=>{
            next(err)
        })*/
    /*Product.find()
            .distinct('allergens_from_ingredients')
            .then(allergens => {
                res.status(200).json({allergens})
            })
            .catch(err => {
                next(err)
            })*/
};

exports.product_find_all = function (req, res, next) {

    Product.find({})
            .limit(10)
            .exec()
            .then(products => {
                res.status(200).json({products})
            })
            .catch(err => {
                next(err)
            });
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