var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// let ObjectId = Schema.ObjectId;
var dbCollection = 'Comments';

var CommentSchema = new Schema({
	content : {
		type: String,
		required : true
	},
	date: { type: Date, default: Date.now },





	author_id: {
		type: String,
		required: true
	},

	recette_id : {
		type: String,
		required : true
	}



}, { collection : dbCollection });

// Export the model
module.exports = mongoose.model('Comment', CommentSchema);