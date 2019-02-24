var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
var dbCollection = 'Prices';

var PriceSchema = new Schema({
    "id_product": {
        "type": "string",
        "required": false
    },
    "id_store": "string",
    "prix": {
        "type": "string",
        "required": false
    },
    "adresse": "string",
    "lat": "string",
    "long": "string",
}, { collection: dbCollection });

// Export the model
module.exports = mongoose.model('Price', PriceSchema);