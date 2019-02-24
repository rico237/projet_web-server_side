const mongoose = require('mongoose');
const Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
const dbCollection = 'Comments';

const CommentSchema = new Schema({
	content : {
		type: String,
		required : true
	},
	recette_id : {
		type: 	ObjectId,
		ref:	'Recette',
		required : true
	}
}, { collection : dbCollection, timestamp : true });

// Export the model
module.exports = mongoose.model('Comment', CommentSchema);