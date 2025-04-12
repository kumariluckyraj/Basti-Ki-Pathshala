import mongoose from "mongoose";
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    email:{type:String,require:true},
    name:{type:String},
    username:{type:String,require:true},
    phone:{type:String,require:true},
    committee:{type:String,require:true},
   experience:{type:String,require:true},
    createAt:{type:Date,default:Date.now},
    updateAt:{type:Date,default:Date.now},
});


export default  mongoose.models.User || model("User",UserSchema);