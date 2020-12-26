const express=require("express")
const app=express()
app.get("/",(req,res,err)=>{
    res.send("hello world")
})
const port=3000
app.listen(port,()=>{
    console.log(`App run on port ${port}`)
})