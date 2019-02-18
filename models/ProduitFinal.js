var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dbCollection = 'ProduitFinal';

var ProduitFinalSchema = new Schema({
    "_id": "string",
    "name": {
        "type": "string",
        "required": false
    },
    "product_id": {
        "type": "number",
        "required": false
    },
    "prices": {
        "type": "Array",
        "required": false
    }
}, 
{ collection: dbCollection });

// Export the model
module.exports = mongoose.model('ProduitFinal', ProduitFinalSchema);