const Product = require('../models/productModel')


// create PRODUCT -- admin
exports.createProduct = async (req, res,next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product})
}


//GEt all products 
exports.getAllproducts = async(req, res) => {
    
    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    })
}

// Update product --admin
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if(!product){
        res.status(200).json({
            success: false,
            message: "Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true, 
        runValidators: true, 
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product
    })
}

// Delete Product
exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    await product.deleteOne();

    res.status(200).json({
        success: true,
        message:"Prodcut deleted successfully"
    })
}

// get Product details
exports.getProductDetails = async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    res.status(200).json({
        success: true,
        product
    })
}
