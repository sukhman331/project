import { Link } from "react-router-dom"

function NavBtn({to, children}) {
    return (
    <>  
        <Link to={to}>{children}</Link>
    </>
    )
};

export default NavBtn
