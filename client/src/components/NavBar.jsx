import { Link, useLocation } from 'react-router-dom'
import SearchBar from './SearchBar'
import { searchBarVisibilty } from '../utils/constants';
import NavBtn from './NavBtn';

function NavBar() {

    const location = useLocation();
    const currentUrl = location.pathname;

    return (
        <div className="flex flex-row dark:bg-zinc-900 h-24 p-7 items-center justify-between">
            {searchBarVisibilty.includes(currentUrl) ?
            <SearchBar /> : 
            ''
            }
            <div className='flex items-center space-x-4'>
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
        </div>
    )
}

export default NavBar