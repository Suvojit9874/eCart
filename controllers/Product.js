const Product = require("../models/Product");

exports.getAllProduct = async (req, res) => {
  try {
    const allProduct = await Product.find();
    return res.status(200).json({
      success: true,
      data: allProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500),json({
        success:false,
        message:'Internal Server Error'
    })
  }
};

exports.getOneProduct =async(req,res)=>{
    try {
        const productId= req.body.productId;
        const product = await Product.findOne({_id:productId});
        if(!product){
            return res.status(300).json({
                success: false,
                message:'No Product Found',
              });
        }
        return res.status(200).json({
          success: true,
          data: product,
        });
    } catch (error) {
        return res.status(500),json({
            success:false,
            message:'Internal Server Error'
        })
    }
}

exports.deleteProduct=async(req,res)=>{
    try {
        const productId= req.body.productId;
        const product = await Product.findOneAndDelete({_id:productId});

        return res.status(200).json({
          success: true,
          message:'Product deleted successfully'
        });
    } catch (error) {
        return res.status(500),json({
            success:false,
            message:'Internal Server Error'
        })
    }
}

exports.updateProduct=async(req,res)=>{
    try {
        const productId= req.body.productId;
        const {title,description,price,image,categories} = req.body
        if(!title||!description||!price||!image||!categories){
            return res.status(300),json({
                success:false,
                message:'Fill input fields properly'
            })
        }
        const updatedProduct=await Product.findOneAndUpdate({_id:productId},{title,description,price,image,categories},{new:true})
        return res.status(200).json({
            success: true,
            data: updatedProduct,
          });

        
    } catch (error) {
        return res.status(500),json({
            success:false,
            message:'Internal Server Error'
        })
    }
}




