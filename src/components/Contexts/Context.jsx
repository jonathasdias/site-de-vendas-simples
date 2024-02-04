import React, {useState, createContext, useContext} from "react";
import Themes from "./Themes";

const ContextProvider = createContext();

export const contexts = ()=> useContext(ContextProvider);

export function Context({children}) {
    const [isDark, setIsDark] = useState(false);
    const [ productsCart, setProductsCart ] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [products, setProducts] = useState([]);
    const [ productsQuantity, setProductsQuantity ] = useState(0);

    function toggleTheme() {
        setIsDark(prev=> !prev);
    }
    
    const themes = {
        toggleTheme,
        Themes,
        isDark,
        products,
        setProducts,
        productsCart,
        setProductsCart,
        productsQuantity,
        setProductsQuantity
    }

    return(
        <ContextProvider.Provider value={themes}>
            {children}
        </ContextProvider.Provider>
    )

}