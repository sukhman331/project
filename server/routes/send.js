import express from "express";
import WhatsAppClient from "../services/whatsappClient.js";

const sendRouter = express.Router();

sendRouter.get("/", (req, res) => {
    res.send("hello")
});

sendRouter.post("/", async (req, res) => {

    try {

        const {number, message} = req.body;

        await WhatsAppClient.sendMessage(`${number}@c.us`, message);

        res.status(200).send("send message on whatsapp ");

    } catch (error) {
        console.error("Error while sending message:", error);
        res.status(500).send("Failed to send message")
    }
 
}) 

export default sendRouter;


