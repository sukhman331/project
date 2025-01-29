import { useModalContext } from "../utils/modalContext";
import Add from "./Add.jsx";
import Packages from "./AddPackages.jsx";
import MembersList from "./MembersList.jsx"

function Modal() {

    const { visible, setVisible } = useModalContext();
    function handleClick(event) {
        
        if (event.target === event.currentTarget) {

            console.log("div clikced")
            setVisible(!visible.visible)
        }
    };

    return (
        visible.visible && (
            <>
                <div onClick={handleClick} className="fixed bg-overlay w-full h-full inset-0 flex items-center justify-center z-50">
                    <div onClick={(e) => e.stopPropagation()} className="rounded-2xl w-3xl shadow-xs max-h-[75vh] overflow-y-auto ">
                        {visible.path === "add_member" && (
                            <Add/>
                        )}
                        {visible.path === "add_package" && (
                            <Packages />
                        )}  
                        {visible.path === "select_member" && (
                            <MembersList />
                        )}                      
                    </div>
                </div>
            </>
        )
    )
};

export default Modal;