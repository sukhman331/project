import MemberIcon from "../icons/MemberIcon.jsx";
import PackageIcon from "../icons/PackageIcon.jsx";
import MessageIcon from "../icons/MessageIcon.jsx";

import { useLocation } from "react-router-dom";
import Logo from "../icons/Logo.jsx";

function SideBar() {

    const location = useLocation();

    return (
        <>  <div className="flex flex-col h-screen w-0 sm:w-64 p-4 gap-2.5 bg-sidebar text-white relative">
                <Logo />
                <nav className="flex flex-col justify-items-start z-10">
                    <MemberIcon active={location.pathname.includes("member")}/>
                    <PackageIcon active={location.pathname.includes("package")}/>
                    <MessageIcon active={location.pathname.includes("send")}/>
                </nav>
            
            </div>
        </>
    )
}

export default SideBar;