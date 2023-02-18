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
        likes:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }],
        date:{
            type:Date,
            default:Date.now
        },
        comments:[{
            text:String,
            author:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'User'
            }
        }]
},
{
    timestamps: false 
}
)

module.exports = mongoose.model("Publications", PublicationsSchema);