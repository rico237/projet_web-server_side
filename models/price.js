var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
var dbCollection = 'Prices';

var PriceSchema = new Schema({
    "_id": ObjectId,
    "id_product":  "string",
    "id_store": "string",
    "prix": "string",
    "adresse": "string",
    "lat": "string",
    "long": "string"
}, { collection: dbCollection });

// Export the model
module.exports = mongoose.model('Price', PriceSchema);