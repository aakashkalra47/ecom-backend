const Products=require('../models/product/product');
const getProducts=async (parameters)=>{
    const {category, ids}=parameters;
    let products=[];
    if (category) {
        products=await Products.find({category});
    } else {
        products = await Products.find({ _id: { $in: ids } })
    }
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
