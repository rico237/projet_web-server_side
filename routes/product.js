var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/product');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

router.post('/create', product_controller.product_create);

router.get('/all', product_controller.product_find_all);

router.get('/allergens/all', product_controller.product_allergens_all);

router.get('/users', product_controller.getUsers);

router.get('/:id', product_controller.product_details);

router.post('/find_allergens', product_controller.find_products_with_allergens);

router.post('/find_allergens/ingredients', product_controller.find_ingredients_from_products_with_allergens);

router.get('/:id/additives', product_controller.product_additives);

router.get('/:id/ingredients', product_controller.product_ingredients);

router.get('/:id/ingredients/description', product_controller.product_ingredients_description);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;