const express=require("express")
const { NoticeModel } = require("../Models/notice.model")


const noticeRouter=express.Router()


noticeRouter.get("/",async (req,res)=>{
    let authorName=req.body.authorName
    try {
        if(authorName==undefined){
            let notice=await NoticeModel.find()
            res.send(notice) 
        }else{
            let notice=await NoticeModel.find({authorName})
            res.send(notice) 
        }
       
        
    } catch (error) {
        console.log(error)
        res.send({"msg":"Error while getting All notices"})
    }
})


noticeRouter.post("/add",async (req,res)=>{
    let payload=req.body
    try {
        let notice= await NoticeModel.insertMany(payload)
        res.send({"msg":"Notice added Sucessfully"})
        
    } catch (error) {
        console.log(error)
        res.send({"msg":"Error while adding notice."})
    }

})

noticeRouter.patch("/:id",async (req,res)=>{
    let id=req.params.id
    let payload=req.body
    try {
        let updatenotice= await NoticeModel.findByIdAndUpdate({_id:id},payload)
        res.send({"msg":"Notice Updated sucessfully"})
        
    } catch (error) {
        console.log(error)
        res.send({"msg":"Error while updating notice data."})
    }
})

noticeRouter.delete("/:id",async (req,res)=>{
    let id=req.params.id
    try {
        let deletenotice= await NoticeModel.findByIdAndDelete({_id:id})
        res.send({"msg":"Notice Deleted sucessfully"})
        
    } catch (error) {
        console.log(error)
        res.send({"msg":"Error while Deleting notice data."})
    }
})

module.exports={
    noticeRouter
}