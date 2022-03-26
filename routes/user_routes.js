const express=require('express');
const router=express.Router();
const {signup_controller, login_controller} =require('../controllers/user_controller');

router.post('/signup',signup_controller);
router.post('/login',login_controller);

module.exports=router;