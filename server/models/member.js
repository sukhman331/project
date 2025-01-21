import mongoose from "mongoose";
import autoIncrement from "mongoose-sequence"

const memberSchema = new mongoose.Schema({
    memberId: {
        type: Number,
        unique: true
    },
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
    },
    expiring: {
        type: Date,
        default: null
    },
    timeLeft: {
        type: Number,
        default: 0
    }
});

memberSchema.plugin(autoIncrement(mongoose), { inc_field: 'memberId' });

const Members = mongoose.model("members", memberSchema);

export default Members;