import axios from "axios";
import fs from "fs";
import FormData from "form-data";

const WHATSAPP_TOKEN = 'EAAMieDy71swBO9MhO0LUaXtsnUEKpDufGSfHZBBAOrvnIbMIzqIUP1SgKEdwWoq2eU2HK5fVZCqDBYIRV362KbvVbXaaZBg1X57KDzbCNEsTXHQfzfGowIudo2QI7ni3DmBdhvDgpgky37YNXFrOgATNEl1ZCg1W5krzxG8bDI5qhgLnmO9ZAZB34b';
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

export async function sendImage(recipinet, imageLink, caption = '') { 

    // imageLink = 'https://dummyimage.com/600x400/000/fff.png&text=manfra.io';
    imageLink = '/assets/download.png'

    const imageLinkFormatted = new String(imageLink)

    let imageId;
    let imageBody = {
        link: imageLink,
        caption: caption
    }

    if (imageLinkFormatted.endsWith(".png") || imageLinkFormatted.endsWith(".jpg")) {
        
        console.log("uploading image")

        imageId = await uploadImage(imageLinkFormatted);

        imageBody = {
            id: imageId,
            caption: caption
        }
    }

    console.log(imageBody)

    
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

    } catch (error) {
        console.error('Error sending message:', error)
    }
    
}

async function uploadImage(imageLink) {

    console.log(imageLink)

    let format = "image/png";

    if (imageLink.endsWith("jpg")) {
        format = "image/jpg"
    }

    const data = new FormData()

    data.append('messaging_product', 'whatsapp')
    data.append('file', fs.createReadStream(process.cwd() + `${imageLink}`), { contentType: format })
    data.append('type', 'IMAGE')

    const response = await axios({
        url: MEDIA_URL,
        method: 'post',
        headers: {
            'Authorization': `Bearer ${WHATSAPP_TOKEN}`
        },
        data: data
    })

    return response.data.id     
}