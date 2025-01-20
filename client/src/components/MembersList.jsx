import { useEffect, useState } from "react";
import { fetchMembersAll } from "../api/members.js";
import MemberDisplay from "./MemberDisplay.jsx";

function MembersList() {

    const [list, setList] = useState([])

    useEffect(() => {

        fetchMembersAll(setList);
        
    }, [])

    console.log(list)

    return (
        <>
            {list.map((member, index) => (
                <MemberDisplay key={index} info={member}/>
            ))}
        </>
    )
}

export default MembersList;