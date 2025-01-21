import { useNavigate } from "react-router-dom";
import toDate from "../utils/toDate";

function MemberDisplay({info}) {

    const expiring = new Date(info.expiring)
    const joining = new Date(info.joining)

    const timeLeft = Math.floor((expiring - joining) / (1000 * 60 * 60 * 24)) 

    const navigate = useNavigate();

    function handleClick(id) {
        navigate(`/member/${id}`, {state: {info: info}} );
    };

    // more member info

    return (
        <div className="diplay-members" style={{cursor: "pointer"}} onClick={() => handleClick(info.memberId)}>
            {info.memberId},{info.name},{toDate(info.expiring)},{info.timeLeft}
        </div>
    )
}

export default MemberDisplay;