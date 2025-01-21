import axios from "axios";
import URLS from "./urls";

export async function sendMessage(send) {

    console.log(send)

    await axios.post(`${URLS.HTTP}${URLS.sendMessage}`, send)
}

export async function getMessage(setMessage) {
    const response = await axios.get(`${URLS.HTTP}/get_send`);
    setMessage(response.data);
};

