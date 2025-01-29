import { useNavigate } from "react-router-dom";
import toDate from "../utils/toDate";
import getDaysLeft from "../utils/getDaysLeft.js";
import Contents from "./Contents.jsx";
import { useSelectContext } from "../utils/selectContext.jsx";
import { useEffect } from "react";

function MemberDisplay({i, action, info}) {
    
    const navigate = useNavigate();
    
    const { select, setSelect } = useSelectContext();
    
    const toAdd= "shadow-2xl bg-input_bg toRemove"

    function handleClick(event) {

        if (select.selected === true) {

            const prevData = select.items

            const element = event.currentTarget;
            if (select.items.includes(info)) {
                setSelect({selected: true, items: select.items.filter(item => item !== info )});                
                element.classList.remove(...toAdd.split(' '));
            } else {
                element.classList.add(...toAdd.split(' '));
                setSelect({selected: true, items: [...prevData, info]});
            }
        } else {

            navigate(`/member/${info.memberId}`, {state: {info: info}} );
        }

    };

    useEffect(() => {
        if (select.selected === false ) {
            const elements = document.getElementsByClassName("toRemove");

            Array.from(elements).forEach((element) => {
                element.classList.remove(...toAdd.split(' '));
            })
        }
    }, [select.selected])

    return (
        <>
        {i === 0 && <Contents action={action} />}
        <div className="grid_layout hover:shadow-2xl hover:bg-input_bg cursor-pointer" 
            onClick={(event) => handleClick(event)} >
            <span className="s">{info.memberId}</span>
            <span className="s">{info.first+" "+info.last}</span>
            <span className="s">{toDate(info.expiring)}</span>
            <span className="s">{getDaysLeft(info.expiring)}</span>
        </div>
        
        </>
    )
}

export default MemberDisplay;