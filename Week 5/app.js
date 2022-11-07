const express = require("express")
const app = express()
const PORT =8080

app.get("/user",(req,res)=>{
    res.send("User")
})

app.listen(PORT)