import React, {useState, createContext, useContext, useEffect} from "react";
import Themes from "./Themes";

const ContextProvider = createContext();

export const contexts = ()=> useContext(ContextProvider);

export function Context({children}) {
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDark")) || false);
    const [ productsCart, setProductsCart ] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [products, setProducts] = useState([]);
    const [ productsQuantity, setProductsQuantity ] = useState(0);
    const [ searchProduct, setSearchProduct ] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    function toggleTheme() {
        setIsDark(prev=> !prev);
    }

    useEffect(()=> {
        localStorage.setItem("isDark", JSON.stringify(isDark));
    },[isDark])
    
    const themes = {
        toggleTheme,
        Themes,
        isDark,
        products,
        setProducts,
        productsCart,
        setProductsCart,
        productsQuantity,
        setProductsQuantity,
        currentPage,
        setCurrentPage,
        searchProduct,
        setSearchProduct,
        totalPages,
        setTotalPages
    }

    return(
        <ContextProvider.Provider value={themes}>
            {children}
        </ContextProvider.Provider>
    )

}