const express=require('express');
const dotenv=require('dotenv');

const import_data=require('./Database/Default');
const cors=require('cors');

dotenv.config({path:'./config/.env'});
const {connection}=require('./Database/db');
connection();

const app=express();
app.use(cors());

const PORT=process.env.PORT || 8000;
const userRoutes=require('./routes/user_routes');
const productRoutes=require('./routes/product_routes');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(userRoutes);
app.use(productRoutes);

app.listen(PORT,()=>{
    console.log(`Server is Running at PORT ${PORT}`);
});

import_data();
