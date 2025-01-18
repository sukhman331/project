import { useState } from "react"
import { Link } from "react-router-dom"

import Add from "../components/Add.jsx"

function Manage() {

    return(
        <div>
            <div>
                <Link to="/manage/add">Add Members</Link>
            </div>
            <div>
                <Link to="/manage/renew">Re-new Member</Link>
            </div>
        </div>
    )
}

export default Manage