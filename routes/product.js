let express = require('express');
let router = express.Router();

let product_controller = require('../controllers/product');

/*
	GET routes
*/
// Test
router.get('/test', product_controller.test);

// Produit
router.get('/all', product_controller.product_find_all);

router.get('/:id', product_controller.product_details);

router.get('/:id/additives', product_controller.product_additives);

router.get('/:id/ingredients', product_controller.product_ingredients);

router.get('/:id/ingredients/description', product_controller.product_ingredients_description);

// Allergenes
router.get('/allergens/all', product_controller.product_allergens_all);

/*
	POST routes
*/

router.post('/images', product_controller.find_images_url_for_product);

router.post('/create', product_controller.product_create);

router.post('/find_allergens', product_controller.find_products_with_allergens);

router.post('/find_allergens/ingredients', product_controller.find_ingredients_from_products_with_allergens);

/*
	PUT routes
*/

router.put('/:id/update', product_controller.product_update);

/*
	DELETE routes
*/

router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;