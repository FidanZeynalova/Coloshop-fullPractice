const mongoose = require("mongoose")


let colorshopSchema = new mongoose.Schema({
    name:{
        required:[true,"Enter Name"],
        type:String
    },
    price:{
        type:Number,
        required:[true,"Enter Price"]
    }
})

let colorshopModel = mongoose.model("/coloshop",colorshopSchema)

module.exports = colorshopModel