const user=require('../model/user_schema');

const signup_controller=async (request,response)=>{
    try{
        let new_user=new user(request.body);
        const res=await new_user.save();
        console.log(res);
        response.status(200).json({test:"User Registered Succesfully",status:'registered',username:res.username});
    }
    catch(e){
        console.log(e.message);
    }
}

const login_controller=async(request,response)=>{
    try{
        const {username,password}=request.body;
        let cur_user=await user.findOne({username,password});
        if(cur_user)
        {
            response.status(200).json({user:cur_user,statusResult:true});
        }
        else
        response.status(200).json({statusResult:false});
    }
    catch(e){
        response.status(500).json(e.message);
    }
}

module.exports={
    signup_controller,
    login_controller
}
