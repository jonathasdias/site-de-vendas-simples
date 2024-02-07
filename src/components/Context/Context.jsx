import React, {useState, createContext, useContext} from "react";
import Themes from "./Themes";

const ContextProvider = createContext();

export const contexts = ()=> useContext(ContextProvider);

export function Context({children}) {
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDark")) || false);
    const [ productsCart, setProductsCart ] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [products, setProducts] = useState([]);
    const [ searchProduct, setSearchProduct ] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [ isLoad, setIsLoading ] = useState(true);

    const globalVariables = {
        Themes,
        isDark,
        setIsDark,
        products,
        setProducts,
        productsCart,
        setProductsCart,
        currentPage,
        setCurrentPage,
        searchProduct,
        setSearchProduct,
        totalPages,
        setTotalPages,
        isLoad,
        setIsLoading
    }

    return(
        <ContextProvider.Provider value={globalVariables}>
            {children}
        </ContextProvider.Provider>
    )
}