var Product = require('../models/product');

tab = ["Raclette","Poulet au curry","Boeuf bourguignon","Daube","Quenelles","Cake au jambon","Petits fours au fromage","Magret de canard","Saumon à la crème","Melon nature","Moules au vin blanc","Gratin de pommes de terre","Tarte au citron","Tarte au citron meringué","Tartiflette"];

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

exports.product_create = function (req, res) {
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

exports.product_find_all = function () {
    Product.find({}, function(err, docs){
        if (!err){ 
            console.log(docs);
            // res.json({message: docs});
            process.exit();
        } else {throw err;}
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};