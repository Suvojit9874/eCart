const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    totalAmount:{
        type:Number,
        required:true
    },
    items:[{
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        },
        quantity:{
            type:Number,
            default:1
        }
    }]
})

module.exports = mongoose.model('Order',orderSchema)