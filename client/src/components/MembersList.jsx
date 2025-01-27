import { useEffect, useState } from "react";
import { useSearchContext } from "../utils/searchContent.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchMembersAll, fetchMembersByQuery } from "../api/members.js";
import MemberDisplay from "./MemberDisplay.jsx";

function MembersList() {

    const { query } = useSearchContext();

    const {data: all} = useQuery({
        queryKey: ['member'],
        queryFn: fetchMembersAll,
    });

    const {data: filtered} = useQuery({
        queryKey: ['member', query],
        queryFn: () => fetchMembersByQuery(query),
        enabled: !!query
    });

    console.log(all)
    console.log(filtered)

    return (
        
        <div className="flex flex-col ">
            {(filtered && filtered?.length !== 0) && (
                <section className="grid grid-cols-4 gap-4 text-center p-4 ">
                    <span className="font-semibold">ID</span>
                    <span className="font-semibold">Name</span>
                    <span className="font-semibold">Expiring On</span>
                    <span className="font-semibold">Days Left</span>
                </section>
            )}
            {(query) ? 
                (filtered && filtered?.length === 0) ? (
                    <div >
                        No members were found with name
                    </div>
                    ) : (
                    filtered?.map((member, index) => (
                        <MemberDisplay key={index} info={member}/>
                    ))
                          
                ) : (
                all?.map((member, index) => (
                    <MemberDisplay key={index} info={member}/>
                ))
            )}        
        </div>
    )
}

export default MembersList;