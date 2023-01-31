const  express = require("express");
const app = express();
const customerRoute = require("./routes/customer");
const orderRoute = require("./routes/order");
const inventoryRoute = require("./routes/inventory");


app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/",customerRoute);
app.use("/",orderRoute);
app.use("/",inventoryRoute);



app.use("*",(req,res)=>{
    res.sendStatus(404);
})

module.exports = app;