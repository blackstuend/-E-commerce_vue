const mongoose = require("mongoose")
const { Schema } = mongoose;

const ADMIN = new Schema({
    username:String,
    password:String
});

module.exports = mongoose.model("admin",ADMIN)