import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
       type:String,
       require:true
    },
    password:{
       type:String,
       require:true
    },
    birthdate:{
       type:String,
       require:true
    },
     name:{
        type:String,
     },
     lastName:{
        type:String
     },
     profile_picture:{
        type:String
     },
     friends:{
        type:[mongoose.Schema.Types.ObjectId],
        ref: "User"
     },
     verified:{
        type:Boolean,
     },
     connected:{
         type:Boolean,
     }
},
{ timestamps: false }
)

module.exports = mongoose.model("User", UserShema);