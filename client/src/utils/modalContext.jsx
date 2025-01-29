import { createContext, useContext, useState} from "react";

const ModalContext = createContext();

export function useModalContext() {
    return useContext(ModalContext);
}

export function ModalProvider({ children }) {
    const [visible, setVisible] = useState({visible: false, path: ''});

    return (
        <ModalContext.Provider value={{visible, setVisible}}>
            {children}
        </ModalContext.Provider>
    )
}