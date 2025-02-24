const express = require('express');
const connectDB = require ('./src/database/db');
const router = require('./src/controller/userController');

const app = express();

require('dotenv').config({
    path:'./src/config/.env'
});

const port = process.env.PORT || 8000;
const url = process.env.db_url;
app.use('/api',router);


app.listen(port,async()=>{
    try{
        await connectDB(url);
        console.log(`Server is running in port ${port}`);
    }
    catch(error){
        console.error(error);
    }
});

app.get('/',(req,res)=>{
    res.send("Hello world");
});