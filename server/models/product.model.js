const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minlength: [3, "Title needs at least 3 characters"],
      required: [true, "Title is required"],
    },
    price: {
      type: Number,
      min: [0, "Price must be positive number"],
      required: [true, "Price is required"],
    },
    description: {
      type: String,
      minlength: [5, "Description must be longer than 5 characters"],
    },
  },
  { timestamps: true }
);

module.exports.Product = mongoose.model("Product", ProductSchema);
