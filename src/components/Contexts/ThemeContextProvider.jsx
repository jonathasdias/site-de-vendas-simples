import React, {useState, createContext, useContext} from "react";
import Themes from "./Themes";

const Context = createContext();

export const contextTheme = ()=> useContext(Context);

export function ThemeContextProvider({children}) {
    const [isDark, setIsDark] = useState(false);

    function toggleTheme() {
        setIsDark(prev=> !prev);
    }
    
    const themes = {
        toggleTheme,
        Themes,
        isDark
    }

    return(
        <Context.Provider value={themes}>
            {children}
        </Context.Provider>
    )

}