const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
    Customer_id:{type:String,required:true},
    Customer_name:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
})

const CustomerModel = mongoose.model("customer",CustomerSchema);

module.exports = CustomerModel;