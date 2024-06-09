const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"]
  },
  phone_no: {
    type: Number
  },
  role: {
    type: String,
    enum: ['admin', 'customer'],
    default: 'customer'
  },
  order:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Order'
  }]
});



module.exports = mongoose.model("User", userSchema);
