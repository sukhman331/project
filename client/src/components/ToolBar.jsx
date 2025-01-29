import AddIcon from '../icons/AddIcon';
import MessageToolBarIcon from '../icons/MessageToolBarIcon';
import SelectIcon from '../icons/SelectIcon';
import { useSelectContext } from '../utils/selectContext';

function ToolBar() {

    const {select} = useSelectContext();

    return (
        <>
            <div className='flex flex-row items-center gap-1.5 p-4 w-full text-text_color'>
                <div className='flex items-center space-x-4'>
                    <AddIcon />
                    <SelectIcon />
                    {select.selected && <MessageToolBarIcon />}
                </div>
            </div>

        </>
    )
}

export default ToolBar;

