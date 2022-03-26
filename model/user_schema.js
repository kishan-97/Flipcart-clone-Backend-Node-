const mongoose=require('mongoose');

const user=new mongoose.Schema({
firstname:{
    type:String,
    required:true
},
lastname:{
    type:String,
    required:true
},
username:{
    type:String,
    required:true,
    index:true,
    unique:true,
    lowercase:true
},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
},
password:
{
    type:String,
    required:true
},
phone:{
    type:String,
}
});


module.exports=new mongoose.model('user',user);