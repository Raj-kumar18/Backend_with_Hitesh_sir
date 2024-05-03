import mongoose, { Mongoose ,Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },

    email:{
        type:String,
        require:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String
    }
    ,
    coverImage:{
        type:String,
        require:true,
    },
    watchHistory:[{
        type:Schema.Types.ObjectId,
        ref:"Video"
    }],

}
,
{
    timestamps:true
}
)

userSchema.pre("save",()=>{})

export const User = mongoose.model("User",userSchema)