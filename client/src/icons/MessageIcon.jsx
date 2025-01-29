import { Link } from 'react-router-dom';
import { MessageSquareText } from 'lucide-react';

function MessageIcon({active}) {

    const toAdd = "bg-input_bg rounded-2xl"
    const element = document.getElementById("message");

    if (active) {
        element?.classList.add(...toAdd.split(" "));
    } else {
        element?.classList.remove(...toAdd.split(" "));

    }

    return (
        <Link to={"/send"}>
            <div className="sidebar_icon_container" id="message">
                <MessageSquareText className="sidebar_icon"/>
                <span className='sidebar_text'>MESSAGES</span>
            </div>
        </Link>
    )
}

export default MessageIcon;