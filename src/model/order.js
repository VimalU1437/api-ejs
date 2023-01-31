const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    Customer_id:{type:String,required:true},
    inventory_id:{type:String,required:true},
    item_name:{type:String,required:true},
    Quantity:{type:Number, required:true}
})

const OrderModel = mongoose.model("order",OrderSchema);

module.exports = OrderModel;