const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Database is connected");
    }
})

app.listen(process.env.PORT,()=>{
    console.log("connected to server "+process.env.PORT);
})