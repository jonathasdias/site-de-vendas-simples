import { HeaderStyled, Logo, Nav, LinkCart, ButtonTheme, LinkProducts, ButtonMenu } from "./HeaderStyled";
import { FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { contexts } from '../Context/Context';
import { useState } from "react";

export default function Header() {

    const {isDark, setIsDark, productsCart} = contexts();
    const [ isOpenMenu, setIsOpenMenu ] = useState(false);

    const productsQuantity = productsCart.reduce((accumulator,currentValue)=> {
        return parseInt(accumulator) + parseInt(currentValue.product_quantity);
    },0);

    function toggleMenu() {
        setIsOpenMenu(prev=> !prev);
    }

    function toggleTheme() {
        setIsDark(prev=> !prev);
    }

    return(
        <HeaderStyled>

            <Logo to='/'>CompreOn</Logo>

            <ButtonMenu onClick={toggleMenu}><RxHamburgerMenu /></ButtonMenu>

            <Nav className={isOpenMenu ? 'open' : ''}>
                <LinkProducts to='/'>Products</LinkProducts>
                <LinkCart to='/cart'>
                    <div>
                        <FaShoppingCart />
                        {productsCart.length > 0 && <span>{productsQuantity}</span>}
                    </div>
                </LinkCart>
                <ButtonTheme onClick={toggleTheme}>{isDark ? <FaMoon /> : <FaSun />}</ButtonTheme>
            </Nav>
            
        </HeaderStyled>
    )
}