const Products=require('../models/product/product');
const getProducts=async (parameters)=>{
    const {category}=parameters;
    const products=await Products.find({category});
    return products; 
}
const getProductById=async(id)=>{
    const product=await Products.findById(id);
    console.log('1..products',product);
    if(!product){
        let error=new Error('Product Not Found');
        error.status=404;
        throw error;
    }
    return product;
}
module.exports={
    getProducts,
    getProductById
}
