var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dbCollection = 'Prices';

var PriceSchema = new Schema({
    "_id": "string", // TODO: Remplacer par le ObjectId de Schema
    "id_product": {
        "type": "string",
        "required": false
    },
    "id_store": {
        "type": "string",
        "required": false
    },
    "prix": {
        "type": "number",
        "required": false
    },
}, { collection: dbCollection });

// Export the model
module.exports = mongoose.model('Price', PriceSchema);