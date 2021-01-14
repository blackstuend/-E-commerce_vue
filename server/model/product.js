const mongoose = require("mongoose")
const { Schema } = mongoose;

const PRODUCT = new Schema({
    name:{
        unique: true,
        required: true,
        type:String,
    },
    categories:{
        required: true,
        type:String,
    },
    qty:{
        required: true,
        type:Number,
    },
    price:{
        required: true,
        type:Number,
    },
    description:{
        required: true,
        type:String,
    },
    imageUrl:{
        required: true,
        type:String,
    }
});

module.exports = mongoose.model("product",PRODUCT)