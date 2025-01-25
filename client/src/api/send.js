import axios from "axios";
import URLS from "./urls";

export async function sendImageMessage(send) {

    console.log(send)

    await axios.post(`${URLS.HTTP}${URLS.sendImageMessage}`, send, {
        headers:{
            "Content-Type": "multipart/form-data",
        },
    })
}

export async function getMessage(setMessage) {
    const response = await axios.get(`${URLS.HTTP}/get_send`);
    setMessage(response.data);
};

