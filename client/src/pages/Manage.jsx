import { useNavigate } from "react-router-dom";

function Manage() {
    const navigate = useNavigate();

    const add = () => navigate("/manage/add");
    const renew = () => navigate("/manage/renew");

    return(
        <div>
            <div className="manage-add-btn" style={{cursor: "pointer"}} onClick={() => add()}>
                Add Members
            </div>
            <div className="manage-renew-btn"  onClick={() => renew()}>
                Re-new Member
            </div>
        </div>
    )
}

export default Manage;