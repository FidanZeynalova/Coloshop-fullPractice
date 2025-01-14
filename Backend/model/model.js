const mongoose = require("mongoose")


let colorshopSchema = new mongoose.Schema({
    image:{
        required:[true,"Enter Image"],
        type:String
    },
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