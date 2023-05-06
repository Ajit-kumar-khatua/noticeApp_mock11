const mongoose= require("mongoose")

const noticeSchema= mongoose.Schema({
    authorName:String,
    title:String,
    description:String,
    date:{type: Date , default: new Date()}
})

const NoticeModel=mongoose.model("notice",noticeSchema)

module.exports={
    NoticeModel
}