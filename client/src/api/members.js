import axios from "axios";
import URLS from "./urls.js";

export async function fetchMembersByQuery(query) {

    if (!query) {
        return [];
    };

    try {
        const response = await axios.get(`${URLS.HTTP}/api/members?q=${query}`);

        console.log(response.data)

        return response.data;

    } catch(err) {
        console.log('Error fetching members', err);
    };
};

export async function fetchMembersAll() {

    try {
        const response = await axios.get(`${URLS.HTTP}${URLS.getMembersAll}`)

        console.log(response.data)

        return response.data;
    } catch (err) {
        console.error("Error fetching all members:", err)
    }
    
}