function Button({missingFields, showMessage, clickFunc, value, children}) {

    const beforeClasses = "border-primary bg-primary";
    const missingFieldsClass = "border-red-900 bg-red-900"

    function handleMouseEnter() {
        const btn = document.getElementById("buttonToClick");
        
        if (missingFields()) {
            showMessage(true)
    
            btn.classList.remove(...beforeClasses.split(' '));
            btn.classList.add(...missingFieldsClass.split(' '));

        };
        
    }
    
    function handleMouseLeave() {
        showMessage(false)

        const btn = document.getElementById("buttonToClick");

        btn.classList.remove(...missingFieldsClass.split(' '));
        btn.classList.add(...beforeClasses.split(' '));
    }

    

    const handleClick = (event) => {
        event.preventDefault();

        if (missingFields()) {
            return;
        }
        clickFunc(value);
    };


    return (  
        <button 
            className="cursor-pointer border-2 rounded-lg h-[45px] small text-xl p-1.5 border-primary
                     bg-primary text-text_color font-semibold"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            id="buttonToClick"
        >{children}</button>
    );
};

export default Button;