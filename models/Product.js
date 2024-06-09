const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"]
  },
  image:{
    type:String,
    required:true    
  },
  categories: {
    type: String,
     enum:['sportskit','groceries']
  }
  });

module.exports = mongoose.model("Product", productSchema);
