var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    // name: {type: String, required: true, max: 100},
    countries: String,
    manufacturing_places:  String
});

ProductSchema.statics.getUsers = function(){
	return new Promise((resolve, reject) => {
    this.find((err, docs) => {
      if(err) {
        console.error(err)
        return reject(err)
      }
      resolve(docs)
    })
  })
};

// Export the model
module.exports = mongoose.model('Product', ProductSchema);