const router=require('express').Router();

const {getProducts}=require('../controllers/product_controller');

router.get('/getproducts',getProducts);


module.exports=router;