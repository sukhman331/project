import { Link, useLocation } from 'react-router-dom'
import SearchBar from './SearchBar'
import { searchBarVisibilty } from '../utils/constants';
import capitalize from '../utils/capitalize';
import NavBtn from './NavBtn';

function NavBar() {

    const location = useLocation();
    const currentUrl = location.pathname;

    return (
        <div className="nav-bar">
            {searchBarVisibilty.includes(currentUrl) ?
             <SearchBar /> : 
                ''
            }
            {location.pathname.includes("/member") && 
                <>
                    <NavBtn to={"/member/add"}>Add Member</NavBtn>
                    <NavBtn to={"/member/renew"}>Re-new Member</NavBtn>
                </>
                
            }
            {location.pathname.includes("/package") && 
                <>
                    <NavBtn to={"package/add"}>Add Package</NavBtn>
                </>
            }
            
        </div>
    )
}

export default NavBar