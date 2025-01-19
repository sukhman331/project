import axios from "axios";

import URLS from "./urls.js";

const fetchMembersByQuery = async (query, setMember) => {

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

export default fetchMembersByQuery;