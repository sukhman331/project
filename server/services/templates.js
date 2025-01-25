import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import mime from "mime-types"
import { IMAGE_NAME } from "../utils/constants.js";
import deleteImage from "../utils/deleteImage.js";

const WHATSAPP_TOKEN = 'EAAMieDy71swBO1t9MN6TRxu0yPTo05n1ZBLIH3GH2kYCf1PGZBvyWveNdsuZA7fBmBcZC26m4lkJP7QQ65FZBclTB4F0XAGT4UdAnrekPHtjesuJNCgh63rb7B0lZBTsHlT4dWW8TCE7OQsMG8IOdrSwYW9uBs1ZBvpL5hA4dZAkQzqGaG3OWlhrJN5HkVmNaVKu0F4NTe75hEsRCjMX3bWZAlWhknUcl';
const URL = "https://graph.facebook.com/v21.0/535232019673083/messages"
const MEDIA_URL = "https://graph.facebook.com/v21.0/535232019673083/media"


// sends message
export async function sendText(recipinet, body) { 

    try {

        await axios({
            url: URL,
            method: "post",
            headers: {
                "Authorization": `Bearer ${WHATSAPP_TOKEN}`,
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                messaging_product: "whatsapp",
                to: recipinet,
                type: "text",
                text: {
                    body: body
                }
            })       
        });

    } catch (error) {
        console.error('Error sending message:', error)
    }
    
} 

export async function sendImage(recipinet, caption = '', extension) { 

    recipinet = '917973371511'

    const imageID = await uploadImage(`/assets/${IMAGE_NAME}${extension}`)

    deleteImage(extension);

    let imageBody = {
        id: imageID,
        caption: caption
    }

    try {

        await axios({
            url: URL,
            method: "post",
            headers: {
                "Authorization": `Bearer ${WHATSAPP_TOKEN}`,
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                messaging_product: "whatsapp",
                to: recipinet,
                type: "image",
                image: imageBody
            })       
        });

        console.log('message sent')

    } catch (error) {
        console.error('Error sending message:', error)
    }
    
}

async function uploadImage(imageLink) {

    console.log(imageLink)

    const MIME_TYPE = mime.lookup(imageLink)

    const data = new FormData()

    data.append('messaging_product', 'whatsapp')
    data.append('file', fs.createReadStream(process.cwd() + `${imageLink}`), { contentType: MIME_TYPE })
    data.append('type', 'IMAGE')

    const response = await axios({
        url: MEDIA_URL,
        method: 'post',
        headers: {
            'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
            ...data.getHeaders(),
        },
        data: data
    })

    console.log(response.data.id, "image id ")

    return response.data.id     
}