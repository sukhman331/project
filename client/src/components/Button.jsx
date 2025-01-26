function Button({className, missingFields, showMessage, clickFunc, value, children}) {

    const mouseEnter = () => missingFields() ? showMessage(true) : '';

    const mouseLeave = () => showMessage(false);

    const handleClick = (event) => {
        event.preventDefault();

        if (missingFields()) return;

        clickFunc(value);
    };

    return (  
        <button 
            className="cursor-pointer border-2 rounded-lg h-[40px] p-1.5"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={handleClick}
        >{children}</button>
    );
};

export default Button;