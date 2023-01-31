const router = require("express").Router();
const InventoryModel = require("../model/inventory");

router.get("/inventory",async(req,res)=>{
    try{
        const data = await InventoryModel .find();
        res.json(data);

    }catch(e){
        res.status(400).json({
            status : "failed",
            message : e.message
        })
    }
});

router.post("/createInventory",async(req,res)=>{
    try{
        const data = await InventoryModel.create({...req.body});
        res.json({
            status:"sucess",
            message:"item added to inventory",
        })
    }
    catch(e){
        res.status(400).json({
            status : "failed",
            message : e.message
        })
    }
})

router.get("/inventory/inventoryType",async(req,res)=>{
    try{
        const data = await InventoryModel.find();
        const type = [];
        data.forEach(elm =>{
            type.push(data.Inventory_type);
        })
        res.json(type);

    }
    catch(e){
        res.status(400).json({
            status : "failed",
            message : e.message
        })
    }
})

router.get("/itemName/availableQuantity",async(req,res)=>{
    try{

        const data = await InventoryModel.findOne({Item_name:req.body.Item_name});
        console.log(data);
        if(data.Available_quantity <= 0){
            res.json({message:"ITEM IS OUT OF STOCK"});
        }else{
    
            res.json({
                quantity:data.Available_quantity
            });
        }
        

    }
    catch(e){
        res.status(400).json({
            status : "failed",
            message : e.message
        })
    }
})

module.exports = router;