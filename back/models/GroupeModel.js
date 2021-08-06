const mongoose = require("mongoose");

const GroupeSchema = new mongoose.Schema({
  groupeAdmin: {
    type:mongoose.Types.ObjectId,
    ref:"User",
    required: true,
  },
  subvalid :{
    type:[{
      type:mongoose.Types.ObjectId,
      ref:"User"
     }],
    default:[],
    },
    subscribe:[String],
  users:[String],
  Name:{
    type:String,
    required:true
  } ,
  avatar:{
  type: String,
default:"./images/camp1.jpg"
},

  theme: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports=mongoose.model("Groupe", GroupeSchema);