function Button2({clickFunc, children}) {

    function handleMouseEnter() {
        
        
    }
    
    function handleMouseLeave() {
        
    }

    const handleClick = (event) => {
        event.preventDefault();

        clickFunc();
    };


    return (  
        <button 
            className="cursor-pointer border-2 rounded-lg h-[45px] small text-xl p-1.5 border-primary
                    text-text_color font-semibold"
            onClick={handleClick}
            id="button2ToClick"
        >{children}</button>
    );
};

export default Button2;