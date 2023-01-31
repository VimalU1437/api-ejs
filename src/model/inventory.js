const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema({
    Inventory_id:{type:String,required:true},
    Inventory_type:{type:String,required:true},
    Item_name:{type:String,required:true},
    Available_quantity:{type:Number,required:true},
})

const inventoryModel = mongoose.model("inventory",inventorySchema);

module.exports = inventoryModel;