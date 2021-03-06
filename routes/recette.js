let express = require('express');
let router = express.Router();
let recipes_controller = require('../controllers/recette');

/*
	GET routes
*/

router.get('/all', recipes_controller.all_recipes);
router.get('/:id', recipes_controller.recipe_detail);

/*
	POST routes
*/


router.post('/create', recipes_controller.recipe_create);



module.exports = router;