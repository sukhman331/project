import { UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';

function MemberIcon({active}) {

    const toAdd = "bg-input_bg rounded-2xl"
    const element = document.getElementById("member");

    if (active) {
        element?.classList.add(...toAdd.split(" "));
    } else {
        element?.classList.remove(...toAdd.split(" "));
    }

    return (
        <Link to={"/member"}>
            <div className="sidebar_icon_container" id="member" >
                <UsersRound className='sidebar_icon'/>
                <span to={"/member"} className='sidebar_text'>MEMBERS</span>
            </div>
        </Link>
    )
}

export default MemberIcon;