const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.types.ObjectId,
        ref:'User'
    },
    product:{
        type:mongoose.Schema.types.ObjectId,
        ref:'Product'
    },
    quantity:{
        type:Number,
        default:1
    }
})



module.exports = mongoose.model("Cart", cartSchema);
