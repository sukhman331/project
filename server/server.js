import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app = express();

const options = {
    origin: ["http://localhost:5173"],
};

app.use(cors(options));

const MONGOURL = process.env.MONGO_URL;
const PORT = process.env.PORT || 7000;

mongoose
    .connect(MONGOURL)
    .then(() => {
        console.log("Database is connected");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        });
    }).catch((err) => console.log(err))


const memberSchema = new mongoose.Schema({
    name: String,
    id: Number,
    });
    
const Members = mongoose.model("members", memberSchema);

app.get("/api/members", async (req, res) => {

    const result = await Members.find();
    // res.json({name: "sukhman", id: 1});
    res.json(result);

})

app.listen(8080, () => {
    console.log('server started')
})
    