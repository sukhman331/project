import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    name: String,
    id: Number,
    });
    
const Members = mongoose.model("members", memberSchema);

export default Members;