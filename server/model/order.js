const mongoose = require("mongoose")
const { Schema } = mongoose;

const ORDER = new Schema({
    name:String,
    email:String,
    address:String,
    phone:String,
    products:Array,
    total:Number
});

module.exports = mongoose.model("order",ORDER)