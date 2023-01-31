const router = require('express').Router()
const OrderModel = require("../model/order");
const InventoryModel = require("../model/inventory");

router.post('/createOrders' , async(req , res)=>{
    try{
        const body = req.body;
        const item = body.item_name;
        const itemQ = await InventoryModel.findOne({Item_name:item});
        console.log(isNaN(itemQ.Available_Quantity - body.Quantity));
        if(itemQ.Available_quantity - body.Quantity > 0 && isNaN(itemQ.Available_Quantity - body.Quantity) ){
            await InventoryModel.updateOne({Item_name:item},{Available_quantity:itemQ.Available_quantity - body.Quantity});
        }else{
            return res.status(400).json({
                status:"failed",
                message: "Out stock"
            })
        }
        const data = await OrderModel.create({...body});
        res.json({
            status:"success",
            message:"order placed successful"
        });
    }
    catch(e){
        res.status(400).json({
            status : "failed",
            message : e.message
        })
    }
})


router.get('/orders' , async(req , res)=>{
    try{
        const data =await OrderModel.find();
        res.json(data);

    }catch(e){
        res.status(400).json({
            status : "failed",
            message : e.message
        })
    }
})

module.exports  = router