import mongoose from "mongoose";

const PublicationsSchema = new mongoose.Schema({
        id_user:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
            require:true
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
        comments:[{
            text : {type:String},
            author:{type:String,}
        }]
},
{
    timestamps: true
}
)

export default mongoose.model("Publications", PublicationsSchema);