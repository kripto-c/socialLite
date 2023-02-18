import mongoose from "mongoose";

const MessageShema = new mongoose.Schema({
        id_1:{
            type:[mongoose.Schema.Types.ObjectId],
            ref: "User"
        },
        id_2:{
            type:[mongoose.Schema.Types.ObjectId],
            ref: "User"
        },
        message:{
            type:Array,
            user:{
                type:String
            },
            message:{
                type:String
            }            
        }

},
{
timestamps: false 
})

module.exports = mongoose.model("Message", MessageShema);