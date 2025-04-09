import express from "express";
import dotenv from "dotenv"

dotenv.config()

const app = express();

app.get("/", (req, res)=>{
    res.send("Hello, this is my Typescript Express Server!")
})


const PORT = process.env.PORT
app.listen(PORT || 3001, ()=>{
    console.log(`Server running at http://localhost:${PORT||3001}`)
}) 
