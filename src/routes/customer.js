const router = require("express").Router();
const CustomerModel = require("../model/customer");
const ejs = require("ejs");

router.get("/customerDetails",async(req,res)=>{
    try{
        const data = await CustomerModel.find();
        res.json(data);
        
    }catch(e){
        res.status(400).json({
            status : "failed",
            message : e.message
        })
    }
});

router.post("/createCustomer",async(req,res)=>{
    try{
        const data = await CustomerModel.create({...req.body});
        res.json({
            status: "success",
            message:"user added sucessfully"
        });
    }
    catch(e){
        res.status(400).json({
            status : "failed",
            message : e.message
        })
    }
})

module.exports = router;