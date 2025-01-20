import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['month', 'week', 'day']
    }, 
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
    
const Packages = mongoose.model("packages", packageSchema);

export default Packages;