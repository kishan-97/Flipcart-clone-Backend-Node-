const mongoose=require('mongoose');

const product=new mongoose.Schema({
    id:String,
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    description:String,
    discount:String,
    tagline:String
});

module.exports=mongoose.model('product',product);