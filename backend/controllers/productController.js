const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ApiFeatures = require('../utils/apifeatures');
const { resource } = require('../app');

// Create Product  --  Admin
exports.createProduct = catchAsyncErrors(async (req,res,next) => {

    req.body.user = req.user.id;
    
    const product = await Product.create(req.body);

   res.status(201).json({
       success:true,
       product
   })
}); 


// Get all Products

exports.getAllProducts = catchAsyncErrors(async (req, res)=>{

    const resultPerPage = 5;
    const productCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

    const products = await apiFeature.query;

    res.status(200).json({
        success: true,
        products
    })
}); 

// Get Product Details

exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler('Product not found', 404))
    }

    res.status(200).json({
        success: true,
        product,
        productCount,
    })
}); 

// Update a product -- Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
     
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success: false,
            message: 'Product not found'
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success: true,
        product
    })
}); 

// Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success: false,
            message: 'Product not found'
        })
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: 'Product Deleted Successfully'
    })
}); 


// Create new review or update the review
// exports.createProductReview = catchAsyncErrors(async (req, res, next) => {

// })