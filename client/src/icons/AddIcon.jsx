import { Plus } from 'lucide-react';
import { useModalContext } from '../utils/modalContext.jsx';
import { useLocation } from 'react-router-dom';

function AddIcon() {

    const { setVisible } = useModalContext();

    const location = useLocation();

    function handleClick() {
        
        if (location.pathname.includes("member")) {
            setVisible({visible: true, path: 'add_member'});
        } else if (location.pathname.includes("package")) {
            setVisible({visible: true, path: 'add_package'});
        }
    }

    return (
        <>
            <nav className='icon_cover border-green-700 bg-green-600' onClick={handleClick}>
                <Plus className='icon'/>
                ADD
            </nav>
        </>
    )
}

export default AddIcon;