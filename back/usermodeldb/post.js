import mongoose from "mongoose";

const shema= new mongoose.Schema({
    content:{type:String, required:true},
    userid:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true}
,
iscompleted:{type:Boolean, default:false}
},{timestamps:true});

const Post= mongoose.model("Post", shema);

export default Post;