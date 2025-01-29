import { useSearchContext } from "../utils/searchContent.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchMembersAll, fetchMembersByQuery } from "../api/members.js";
import MemberDisplay from "./MemberDisplay.jsx";
import NoResult from "./NoResults.jsx";
import getDaysLeft from "../utils/getDaysLeft.js";
import { useState } from "react";

function MembersList() {

    const { query } = useSearchContext();

    let {data: filtered} = useQuery({
        queryKey: ['memberQuery', query],
        queryFn: () => fetchMembersByQuery(query),
        enabled: !!query,
    });
    
    let {data: all} = useQuery({
        queryKey: ['member'],
        queryFn: fetchMembersAll,
        enabled: !query
    });

    function sortByNameAsc () {
        
        all?.sort((a, b) => a.first.localeCompare(b.first)) 
        filtered?.sort((a, b) => a.first.localeCompare(b.first)) 
    }
    function sortByNameDec () {
        
        all?.sort((a, b) => b.first.localeCompare(a.first)) 
        filtered?.sort((a, b) => b.first.localeCompare(a.first)) 
    }
    function sortByDaysLeftAsc () {
        
        all?.sort((a, b) => getDaysLeft(a.expiring) - getDaysLeft(b.expiring));
        filtered?.sort((a, b) => getDaysLeft(a.expiring) - getDaysLeft(b.expiring));
    }
    function sortByDaysLeftDec () {
        
        all?.sort((a, b) => getDaysLeft(b.expiring) - getDaysLeft(a.expiring));
        filtered?.sort((a, b) => getDaysLeft(b.expiring) - getDaysLeft(a.expiring));
    }
    function sortByIdAsc() {

        all?.sort((a, b) => a.memberId - b.memberId);
        filtered?.sort((a, b) => a.memberId - b.memberId);
    }
    function sortByIdDec() {

        all?.sort((a, b) => b.memberId - a.memberId);
        filtered?.sort((a, b) => b.memberId - a.memberId);
    }
    
    const [action, setAction] = useState(null)

    switch(action) {
        case "NameAsc":
            sortByNameAsc()
            break;
        case "NameDec":
            sortByNameDec();
            break;
        case "DaysLeftAsc":
            sortByDaysLeftAsc();
            break;
        case "DaysLeftDec":
            sortByDaysLeftDec();
            break;
        case "IdAsc":
            sortByIdAsc();
            break;
        case "IdDec":
            sortByIdDec();
            break;
        default:
            sortByIdAsc();
            break;
    }

    

    return (
        <div className="flex flex-col w-full ">
            {filtered?.length === 0 ? (
                <NoResult /> 
            ) : (
            (query) ? (      
                filtered?.map((member, index) => (
                    <MemberDisplay key={index} i={index} action={setAction} info={member}/>
                ))   
            ) : (
                all?.map((member, index) => (
                    <MemberDisplay key={index} i={index} action={setAction} info={member}/>
                ))
            )     
            )}
        </div>
        
    )
    
}


export default MembersList;