var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
var dbCollection = 'Prices';

var PriceSchema = new Schema({
    "id_product": "string",
    "id_store": "string",
    "prix": "string",
    "name_store": "string",
    "adresse": "string",
    "lat": "string",
    "long": "string",
}, { collection: dbCollection });

// Export the model
module.exports = mongoose.model('Price', PriceSchema);