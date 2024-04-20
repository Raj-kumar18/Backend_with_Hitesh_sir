// require("dotenv").config({path:"./env"});
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:"./env"
})

connectDB
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log("SERVER IS RUNNING")
    })
})
.catch((error)=>{
    console.log("DB CONNECTION FAILED",error)
})






// const app = express()

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERR: ".error)
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log("DB CONNECTION FAILED",error)
//     }
// })()