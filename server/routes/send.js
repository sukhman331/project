import express from "express";
import { sendImage, sendText } from "../services/templates.js";

const sendRouter = express.Router();

sendRouter.get("/", (req, res) => {
    res.send("hello")
});

sendRouter.post("/", async (req, res) => {

    const {number, message} = req.body

    const type = "text"

    await sendImage(number, "jsfhje", "hello world")
    // sendText(type, number, message);

});



export default sendRouter;


