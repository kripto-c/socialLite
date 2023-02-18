import mongoose from "mongoose";

const PublicationsSchema = new mongoose.Schema({
        id_user:{
            type:[mongoose.Schema.Types.ObjectId],
            ref: "User"
        },
        description:{
             type:String
        },
        image:{
            type:String
        },
        like:{
            type:Number,
            default:0
        }
})