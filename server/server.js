import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// Routers
import router from "./routes/renew.js";
import memberRouter from "./routes/members.js";
import packageRouter from "./routes/packages.js";
import sendRouter from "./routes/send.js";

import WhatsAppClient from "./services/whatsappClient.js";

WhatsAppClient.initialize();

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
app.use(express.json());

app.use("/api/members", router); // get members by query
app.use("/new", memberRouter); // add new member
app.use("/members/get_all", memberRouter); // get all members
app.use("/package/new", packageRouter); // add new package
app.use("/package/get", packageRouter); // send JSON of all packages
app.use("/send", sendRouter); // send WhatsApp message 
app.use("/get_send", sendRouter); // display message 

    