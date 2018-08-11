const mongoose = require('mongoose')
var Schema = mongoose.Schema

var productSchema = new Schema({
  "productId": {type: String},
  "productName": String,
  "salePrice": String,
  "productImage": String
})

module.exports = mongoose.model("Goods", productSchema)
