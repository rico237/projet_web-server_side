var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
var dbCollection = 'Prices';

var PriceSchema = new Schema({
    "_id": ObjectId,
    "id_product": {
        "type": "string",
        "required": true
    },
    "id_store": "string",
    "prix": {
        "type": "string",
        "required": true
    },
    "adresse": "string",
    "lat": "string",
    "long": "string",
}, { collection: dbCollection });

// Export the model
module.exports = mongoose.model('Price', PriceSchema);