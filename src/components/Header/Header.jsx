import { HeaderStyled, Logo, Nav, LinkCart, ButtonTheme, LinkProducts } from "./HeaderStyled";
import { FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";
import { contexts } from '../Contexts/Context';
import { useEffect } from "react";

export default function Header() {

    const {toggleTheme, isDark, productsCart, productsQuantity, setProductsQuantity} = contexts();

    useEffect(()=> {
        const quantity = productsCart.reduce((accumulator,currentValue)=> {
            return parseInt(accumulator) + parseInt(currentValue.product_quantity);
        },0);
        setProductsQuantity(quantity);
    },[productsCart]);

    console.log(productsCart);


    // Usar useEffect para isso.

    return(
        <HeaderStyled>

            <Logo to='/'>Logo</Logo>

            <Nav>
                <LinkProducts to='/'>Products</LinkProducts>
                <LinkCart to='/cart'>
                    <FaShoppingCart />
                    <span>{productsQuantity}</span>
                </LinkCart>
                <ButtonTheme onClick={toggleTheme}>{isDark ? <FaMoon /> : <FaSun />}</ButtonTheme>
            </Nav>
            
        </HeaderStyled>
    )
}