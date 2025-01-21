import whatsappWeb from 'whatsapp-web.js';
const { Client, LocalAuth } = whatsappWeb;
import qrcode from "qrcode-terminal";

export const WhatsAppClient = new Client({
    authStrategy: new LocalAuth 
});

WhatsAppClient.on("qr", (qr) => qrcode.generate(qr, {small: true}));

WhatsAppClient.on("ready", () => console.log('client is ready!'));

WhatsAppClient.on('auth_failure', (msg) => console.error('Authentication failed:', msg));

WhatsAppClient.on("disconnected", (reason) => console.log("reason for disconnection:", reason))

WhatsAppClient.on("message", async (msg) => {
    try {

        if (msg.from != "status@broadcast") {
            const contact = await msg.getContact();
            console.log(contact, msg.body)
        }

    } catch (err) {
        console.error('error:', err)
    }
})

export async function sendMessageUsingLib() {
    try {

        const {number, message} = req.body;

        console.log(number, message)

        await WhatsAppClient.sendMessage(`${number}@c.us`, message);

        res.status(200).send("send message on whatsapp ");

    } catch (error) {
        console.error("Error while sending message:", error);
        res.status(500).send("Failed to send message")
    }
};
