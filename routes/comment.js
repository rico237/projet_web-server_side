var express = require('express');
var router = express.Router();

var comment_controller = require('../controllers/comment');

/*
	GET
*/

router.get('/all', comment_controller.get_all);
router.get('/:id', comment_controller.get_single);

/*
	POST
*/

router.post('/create', comment_controller.create);


/*
	PUT
*/

// router.put('/:id/update', comment_controller.update);

/*
	DELETE
*/

// router.delete('/:id/delete', comment_controller.delete);


// EXPORT
module.exports = router;