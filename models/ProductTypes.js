const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true
    // default: new ObjectId()
  },
  productName: {
    type: String,
    require: true
  },
  unit: {
    type: String,
    require: true
  },
  quanti: {
    type: Number,
    default: 0,
  },
  price: {
    type: String,
  },
  created_at: {
    type: Date,
    timezone: "Asia/Ho_Chi_Minh"
  },
  delete_at: {
    type: Date,
    timezone: "Asia/Ho_Chi_Minh"
  },
  last_modified: {
    type: Date,
    default: Date.now,
    timezone: "Asia/Ho_Chi_Minh"
  }
})

const productTypesSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  typeName: {
    type: String,
    required: true,
  },
  product: [productSchema],
  created_at: {
    type: Date
  },
  delete_at: {
    type: Date,
    default: null,
  },
  last_modified: {
    type: Date,
    default: Date.now
  },
})
const ProductType = mongoose.model('ProductType', productTypesSchema, 'ProductType')

module.exports = ProductType