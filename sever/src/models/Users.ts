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
     friends:[{
        type:[mongoose.Schema.Types.ObjectId],
        ref: "User"
     }],
    publications:[{
          type:mongoose.Schema.Types.ObjectId,
          ref:"Publications"
    }],
    message:[{
       type:mongoose.Schema.Types.ObjectId,
       ref: "Message"
    }]
    ,
     verified:{
        type:Boolean,
     },
     connected:{
         type:Boolean,
     }
},
{ timestamps: false }
)

export default mongoose.model("User", UserShema);