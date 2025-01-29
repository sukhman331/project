import { MousePointer2 } from 'lucide-react';
import { useSelectContext } from '../utils/selectContext';
import { useEffect } from 'react';

function SelectIcon() {

    const { select, setSelect } = useSelectContext();

    const element = document.getElementById("selectSpanToEdit");

    function handleClick() {
        if (select.selected === true) {
            setSelect({...select, selected: false});
        } else {
            setSelect({...select ,selected: true});
        }
    }

    useEffect(() => {
        if (!select.selected && element !== null) {
            element.innerHTML = "SELECT";  
        } else if (select.selected && element !== null) {
            element.innerText = "CANCEL"
        }
        
    }, [select.selected])

    return (
        <nav className='icon_cover border-orange-700 bg-orange-600' onClick={handleClick}>
            <MousePointer2 className='icon'/>
            <span id="selectSpanToEdit" >SELECT</span>
        </nav>
    );
};

export default SelectIcon;
