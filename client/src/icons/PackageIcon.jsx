import { Package } from 'lucide-react';
import { Link } from 'react-router-dom';

function PackageIcon({active}) {

    const toAdd = "bg-input_bg rounded-2xl"
    const element = document.getElementById("package");

    if (active) {
        element?.classList.add(...toAdd.split(" "));
    } else {
        element?.classList.remove(...toAdd.split(" "));

    }

    return (
        <Link to={"/package"}>
            <div className='sidebar_icon_container' id="package">
                <Package className='sidebar_icon'/>
                <span  className='sidebar_text'>PACKAGES</span>
            </div>
        </Link>
    )
        
}   

export default PackageIcon;