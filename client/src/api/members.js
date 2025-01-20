import axios from "axios";

import URLS from "./urls.js";

export async function fetchMembersByQuery(query, setMember) {

    if (!query) {
        setMember([]);
        return;
    };

    try {
        const response = await axios.get(`${URLS.HTTP}/api/members?q=${query}`);
        console.log(response.data);
        setMember(response.data);

    } catch(err) {
        console.log('Error fetching members', err);
    };
};

export async function fetchMembersAll(setList) {

    try {
        const response = await axios.get(`${URLS.HTTP}${URLS.getMembersAll}`)

        setList(response.data)
    } catch (err) {
        console.error("Error fetching all members:", err)
    }
    
}