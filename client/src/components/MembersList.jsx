import { useEffect, useState } from "react";
import { fetchMembersAll } from "../api/members.js";
import MemberDisplay from "./MemberDisplay.jsx";
import FetchMembers from "./FetchMembers.jsx";

function MembersList() {

    const [list, setList] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {

        fetchMembersAll(setList);
        
    }, [])

    console.log(list)

    return (
        <>
            <form>
                <input className="dm-query" placeholder="Search Members" onChange={(e) => setQuery(e.target.value)}/>
            </form>
            {query !== '' 
            ? 
            <FetchMembers query={query}/>
            :
            list.map((member, index) => (
                <MemberDisplay key={index} info={member}/>
            ))}
        </>
    )
}

export default MembersList;