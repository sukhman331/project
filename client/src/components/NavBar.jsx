import { Link, useLocation } from 'react-router-dom'
import SearchBar from './SearchBar'
import { searchBarVisibilty } from '../utils/constants';
import NavBtn from './NavBtn';

function NavBar() {

    const location = useLocation();
    const currentUrl = location.pathname;

    return (
        <div className="flex flex-rowh-24 p-7 items-center justify-between">
            {searchBarVisibilty.includes(currentUrl) ?
            <SearchBar /> : 
            ''
            }
            
        </div>
    )
}

export default NavBar