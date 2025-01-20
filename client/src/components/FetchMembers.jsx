import { useEffect, useState } from "react";

import { fetchMembersByQuery } from "../api/members";
import MemberDisplay from "./MemberDisplay";

function FetchMembers({query}) {

    const [members, setMember] = useState([]);
    
    useEffect(() => {
        
        fetchMembersByQuery(query, setMember);
        
    }, [query])

    return (
        <div className="members-list">
            {members.length > 0 && 
                members.map((member, index) => (
                    <MemberDisplay key={index} info={member}/>
                ))
            }
        </div>
    )
}

export default FetchMembers;