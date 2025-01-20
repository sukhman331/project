import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    pack: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'packages',
        required: true
    },
    dob: {
        type: Date,
        required: false
    },
    mobile: {
        type: String,
        required: true
    },
    joining: {
        type: Date,
        default: Date.now
    }
});
    
const Members = mongoose.model("members", memberSchema);

export default Members;