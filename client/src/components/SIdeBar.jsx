import{ Link } from "react-router-dom";

function SideBar() {
    return (
        <>
            <nav className="flex flex-col h-screen w-64 bg-gray-800 text-white border-r-2 border-gray-900">
                <Link to="/member">Members</Link>
                <Link to="/package">Packages</Link>
                <Link to="/send">Message</Link>
            </nav>
        </>
    )
}

export default SideBar;