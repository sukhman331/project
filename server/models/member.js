import mongoose from "mongoose";
import autoIncrement from "mongoose-sequence"

const memberSchema = new mongoose.Schema({
    memberId: {
        type: Number,
        unique: true
    },
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: false
    },
    landmark: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    pincode: {
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
    email: {
        type: String
    },
    mobile: {
        type: String,
        required: true
    },
    emergencyName: {
        type: String
    },
    emergencyNumber: {
        type: String
    },
    joining: {
        type: Date,
        default: Date.now
    },
    medicalConditions : {
        type: String
    },
    expiring: {
        type: Date,
        default: null
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    }
});

memberSchema.plugin(autoIncrement(mongoose), { inc_field: 'memberId' });

const Members = mongoose.model("members", memberSchema);

export default Members;