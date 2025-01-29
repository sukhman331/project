import { MessageSquareText } from 'lucide-react';
import { useSelectContext } from '../utils/selectContext';
import { useNavigate } from 'react-router-dom';


function MessageToolBarIcon() {

    const {select, setSelect} = useSelectContext();
    const navigate = useNavigate();


    function handleClick() {
        setSelect({...select, selected: false});
        navigate(`/send`);
    };


    return (
        <nav className="icon_cover bg-primary border-4 border-blue-400" onClick={handleClick}>
            <MessageSquareText className='icon'/>
            <span>MESSAGE</span>
        </nav>
    )
}

export default MessageToolBarIcon