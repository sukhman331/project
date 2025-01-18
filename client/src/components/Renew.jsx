import { useState } from "react";

import '../style/renew.css';

import FetchMembers from "../api/FetchMembers";

function Renew() {
    
    const [query, setQuery] = useState('')

    console.log(query)

    return (
        <div >
            <form className="rn-form">
                <input className="rn-search-name" type="text" placeholder="Member Name" onChange={(e) => setQuery(e.target.value)}/>
            </form>
            <FetchMembers q={query}/>
        </div>
    );
};  

export default Renew
