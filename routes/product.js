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

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;