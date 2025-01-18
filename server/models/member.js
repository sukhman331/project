import mongoose from "mongoose";
import autoIncrement from "mongoose-sequence";

const AutoIncrement = autoIncrement(mongoose)

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    userPackage: {
        type: String,
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

memberSchema.plugin(AutoIncrement, {inc_field: "id"})
    
const Members = mongoose.model("members", memberSchema);

export default Members;