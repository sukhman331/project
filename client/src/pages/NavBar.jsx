import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="nav-bar">
            <Link to='*'>Home</Link>
            <Link to='/settings'>Settings</Link>
            <Link to='/manage'>Manage</Link>
            <Link to='/members'>Members</Link>
            <Link to='/send'>Send</Link>
        </div>
    )
}

export default NavBar