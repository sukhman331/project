import whatsappWeb from 'whatsapp-web.js';
const { Client, LocalAuth } = whatsappWeb;
import qrcode from "qrcode-terminal";

const WhatsAppClient = new Client({
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

export default WhatsAppClient;  