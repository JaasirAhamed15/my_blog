import mongoose from "mongoose";
import { Schema,model,models } from "mongoose";


const postSchema =new Schema({
    title:String,
    description: String,
    image:String,
    created_at:String,
},{ toJSON: { virtuals: true } });

postSchema.virtual('short_description').get(function(){
    return this.description?.substring(0,100)+'...'
});

postSchema.virtual("created_at_formatted").get(function(){
    return changedateFormat(this.created_at)
})

function changedateFormat(data_str: any){
    const data = new Date(data_str);
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];

    return `${months[data.getMonth()]} ${data.getDate()}, ${data.getFullYear()}`;
}   


const PostModel=models.Post|| model('Post',postSchema);

export default PostModel;