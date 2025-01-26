import { useState } from "react";

import '../style/renew.css';

function Renew() {
    
    const [query, setQuery] = useState('')

    console.log(query)

    return (
        <div >
            <form className="rn-form">
                <input className="rn-search-name" type="text" placeholder="Member Name" onChange={(e) => setQuery(e.target.value)}/>
            </form>
        </div>
    );
};  

export default Renew
