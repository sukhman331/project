import axios from "axios";
import URLS from "./urls";

export async function addPackage(packageInfo) {

    await axios.post(`${URLS.HTTP}${URLS.addPackage}`, packageInfo);

}

export async function getPackage(setPackage) {

    try {
        const response = await axios.get(`${URLS.HTTP}${URLS.getPackage}`);
        console.log(response.data);

        setPackage(response.data);   

    } catch (err) {
        console.error('error while fetching packages:', err);
    }

}
