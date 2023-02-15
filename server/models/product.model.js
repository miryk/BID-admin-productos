const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    minlength: [5, "Title needs at least 5 characters"]
  },
  price: {
    type: Number,
    min: [0, "Price must be positive number"]
  },
  description: {
    type: String,
    minlength: [10, "Description must be longer than 10 characters" ]
  }
}, {timestamps : true});

module.exports.Product = mongoose.model('Product', ProductSchema)