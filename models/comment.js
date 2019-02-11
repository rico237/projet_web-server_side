var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dbCollection = 'Comments';

var CommentSchema = new Schema({
	
}, { collection : dbCollection });

// Export the model
module.exports = mongoose.model('Comment', CommentSchema);