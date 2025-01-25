import { useEffect, useState } from "react";
import { useSearchContext } from "../utils/searchContent.jsx";
import { fetchMembersAll } from "../api/members.js";
import MemberDisplay from "./MemberDisplay.jsx";
import FetchMembers from "./FetchMembers.jsx";

function MembersList() {

    const [list, setList] = useState([])
    // const [query, setQuery] = useState('')

    const { query } = useSearchContext();

    useEffect(() => {

        fetchMembersAll(setList);
        
    }, [])

    console.log(list)
    console.log(query)

    return (
        <>
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