import { createContext, useContext, useState} from "react";

const SelectContext = createContext();

export function useSelectContext() {
    return useContext(SelectContext);
}

export function SelectProvider({ children }) {
    const [select, setSelect] = useState({selected: false, items: [] });

    return (
        <SelectContext.Provider value={{select, setSelect}}>
            {children}
        </SelectContext.Provider>
    )
}