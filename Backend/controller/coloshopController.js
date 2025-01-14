const express = require("express")
const colorshopModel = require("../model/model")
const { model } = require("mongoose")
const app = express()


let ColoshopController = {
    getAll: async (req,res) =>{
        let allData =await colorshopModel.find()
        res.send(allData)
    },
    getDataById: async (req,res)=>{
        let {id} = req.params
        let newData =await colorshopModel.findById(id)
        res.send(newData)
    },
    deleteData:async (req,res)=>{
        let {id} = req.params
        await colorshopModel.findByIdAndDelete(id)
        res.send("Succes Delete")
    },
    postData:async (req,res)=>{
        let postData = colorshopModel(req.body)
        await postData.save()
        res.send({
            message:'Succes Post',
            data:req.body
        })
    },
    editData:async (req,res) =>{
        let {id} = req.params
        let edit = req.body
        let edited = await colorshopModel.findByIdAndUpdate(id,edit,{new:true})
        res.send({
            message:"Succes Edited",
            data:edited
        })
    }
}

module.exports = ColoshopController