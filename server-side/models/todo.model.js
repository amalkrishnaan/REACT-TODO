import mongoose from "mongoose";
const todoSchema=mongoose.Schema({
    task:{type:String}
})

export default mongoose.models.tasks||mongoose.model("task",todoSchema)
