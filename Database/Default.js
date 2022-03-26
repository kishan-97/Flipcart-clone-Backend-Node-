const {products}=require('../constants/data');

const product=require('../model/product_schema');

const load_data=async()=>{
    try{
        await product.deleteMany({});
        const res=await product.insertMany(products);
        console.log("Inserting Data...");
    }
    catch(e){
        console.log(e.message);
    }
};


module.exports=load_data;