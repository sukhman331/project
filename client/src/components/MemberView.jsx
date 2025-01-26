import { useLocation } from "react-router-dom";
import toDate from "../utils/toDate.js";

function MemberView() {

    const location = useLocation();
    const {info} = location.state || {}

    if (!info) return <div>Loading... </div> 

    return (
        <>
            {info.memberId},{info.name}, {toDate(info.joining)}, {toDate(info.expiring)}, {toDate(info.dob)}, {info.mobile}, {info.timeLeft}
        </>
    )
}

export default MemberView;