const express=require("express")
const { connection } = require("./config/db")
const { noticeRouter } = require("./Routes/notice.route")
require("dotenv").config()
const cors=require("cors")



const app=express()
app.use(express.json())
app.use(cors())
app.use("/notice",noticeRouter)


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to DB")
        
    } catch (error) {
        console.log(error)
    }
    console.log(`Server is running on port ${process.env.port}`)
})