const mongoose=require('mongoose');

const connection=async()=>{
try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");
}
catch(e){
    console.log(e.message);
}
}


module.exports.connection=connection;