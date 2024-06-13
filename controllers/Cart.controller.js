const Cart = require('../models/Cart')


exports.addToCart = async (req, res) => {
    try {
        const { userId, productId } = req.params
        const quantity = req.body;
        const response = await Cart.create({ user: userId, product: productId, quantity })
        return res.status(200).json({
            success: true,
            data: response,
            message: 'Product added to cart'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}


exports.getCartDetails = async (req, res) => {
    try {
        const userId = req.params.userId;
        const response = await Cart.find({ user: userId }).populate('user').populate('product').exec();
        return res.status(200).json({
            success: true,
            data: response
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}

exports.removeProductFromCart = async (req, res) => {
    try {
        const { userId, productId } = req.params
        const response = await Cart.findOneAndDelete({ user: userId, product: productId })
        return res.status(200).json({
            success: true,
            data: response,
            message: 'Product removed from cart'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}


exports.removeWholeCart=async(req,res)=>{
    try {
        const  userId  = req.params.userId
        const response = await Cart.deleteMany({user:userId})
        return res.status(200).json({
            success: true,
            message:'All Product  removed'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}