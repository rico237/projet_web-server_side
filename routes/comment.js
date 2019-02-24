const express = require('express');
const router = express.Router();
const comment_controller = require('../controllers/comment');

/*

	TEST

 */

router.post('/message', comment_controller.test_pusher);

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