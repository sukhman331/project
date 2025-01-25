import express from "express";
import { sendImage, sendText } from "../services/templates.js";
import uplaod from "../utils/multerInit.js";
import path from "path";

const sendRouter = express.Router();

sendRouter.get("/", (req, res) => {
    res.send("hello")
});

sendRouter.post("/image", uplaod.single("image"), async (req, res) => {

    console.log(req.file)
    console.log(req.body)

    const {number, message, image} = JSON.parse(req.body.data);
    const extension = path.extname(image)

    try {

        await sendImage(number, message, extension) // image with or without caption
        // await sendText(number, message) // sends a text only message

        res.status(200).send('message sent succesfully')

    } catch (error ) {
        console.error("Error sending image message:", error)
    }

});

sendRouter.post("/text", async(req, res) => {

    const {number, message} = req.body;
    try {
        await sendText(number, message);

        res.status(200).send('message sent succesfully')
    } catch (error) {
        console.error("Error sending text message:", error)
    }

})



export default sendRouter;


