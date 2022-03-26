const products=require('../model/product_schema');

const getProducts=async(req,res)=>{
    try{
        const fetchedProducts=await products.find({});
        res.json(fetchedProducts);
    }
    catch(e){
        res.json(e.message);
    }
}


module.exports={
    getProducts
}