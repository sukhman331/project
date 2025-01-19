import { useEffect, useState } from "react";

import fetchMembersByQuery from "../api/members";

function FetchMembers({query}) {

    const [members, setMember] = useState([]);
    
    useEffect(() => {
        
        fetchMembersByQuery(query, setMember);
        
    }, [query])

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

export default FetchMembers;