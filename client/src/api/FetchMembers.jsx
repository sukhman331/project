import { useEffect, useState } from "react";
import axios from "axios";

import URLS from "./urls.js"

function FetchMembers({q}) {

    const [members, setMember] = useState([]);
    
    useEffect(() => {
        const fetchMembers = async () => {

            if (!q) {
                setMember([]);
                return;
            }

            try {
                const response = await axios.get(`${URLS.HTTP}/api/members?q=${q}`);
                console.log(response.data)
                setMember(response.data)

            } catch(err) {
                console.log('Error fetching members', err)
            } 
        }

        fetchMembers();
        
    }, [q])

    return (
        <div className="members-list">
            {members.length > 0 && 
                members.map(({name, id}, index) => (
                    <div key={index}>
                        {name}
                    </div>
                ))
            }
        </div>
    )
}

export default FetchMembers