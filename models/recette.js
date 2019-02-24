const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const dbCollection = 'Recipes';

let RecetteSchema = new mongoose.Schema({
    slug: {type: String, lowercase: true, unique: true},
    title: String,
    body: String,
    tagList:[{type: String}],
    author: {type: ObjectId, ref:'User'},
    comments: [{type: ObjectId, ref:'Comment'}]
}, { collection : dbCollection, timestamp : true });

// Export the model
module.exports = mongoose.model('Recette', RecetteSchema);