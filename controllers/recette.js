const Recipe         = require('../models/recette');
const ObjectId        = require('mongoose').Types.ObjectId;

exports.recipe_create = function (req, res, next) {
    var recipe = new Recipe({
        title: req.body.nom,
        body: req.body.description,
        image_url: req.body.image,
        tagList: req.body.tags,
    });

    recipe.save(function (err, recipe) {
        if (err) return next(err);
        res.status(200).json({recipe})
    });
};

exports.all_recipes = function (req, res, next) {
    Recipe.find({}).limit(35).exec()
            .then(recipes => res.status(200).json({ recipes }) )
            .catch(err => next(err));
};

