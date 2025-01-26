import { useNavigate } from "react-router-dom";
import toDate from "../utils/toDate";
import getDaysLeft from "../utils/getDaysLeft";

function MemberDisplay({info}) {

    const navigate = useNavigate();

    function handleClick(id) {
        navigate(`/member/${id}`, {state: {info: info}} );
    };

    return (
        <div className="h-12 grid grid-cols-4 gap-4 text-center p-4" 
            onClick={() => handleClick(info.memberId)}>
            <span>{info.memberId}</span>
            <span>{info.first+" "+info.last}</span>
            <span>{toDate(info.expiring)}</span>
            <span>{getDaysLeft(info.expiring)}</span>
        </div>
    )
}

export default MemberDisplay;