import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import router from "./routes/members.js";

dotenv.config();

const app = express();

const options = {
    origin: ["http://localhost:5173"],
};

app.use(cors(options));

// Database Intializing
const MONGOURL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8080;

mongoose
    .connect(MONGOURL)
    .then(() => {
        console.log("Database is connected");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        });
    }).catch((err) => console.log(err))

// Routes
app.use("/api/members", router);

    