const express = require('express');
const connectDB = require(' ./src/database/db.js ');

const app = express();

require('dotenv').config({
    path: './src/config/.env'
});

const port = process.env.PORT || 8000;
const db_url = process.env.url;


app.listen(async(url) => {
    try{
        await connectDB (url)
        console.log(`Server is running on port ${port}`);
    }
    catch(error){
        console.error(error);
    }
});

app.get('/',(req,res)=>{
    res.send('Hello World!');
});