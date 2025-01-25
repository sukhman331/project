import{ Link } from "react-router-dom";

function SideBar() {
    return (
        <>
            <nav>
                <Link to="/member">Members</Link>
                <Link to="/package">Packages</Link>
                <Link to="/send">Message</Link>
            </nav>
        </>
    )
}

export default SideBar;