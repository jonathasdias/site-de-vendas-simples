import { HeaderStyled, Logo, Nav, LinkCart, ButtonTheme, LinkProducts, ButtonMenu } from "./HeaderStyled";
import { FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
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

    return(
        <HeaderStyled>

            <Logo to='/'>Logo</Logo>

            <ButtonMenu><RxHamburgerMenu /></ButtonMenu>

            <Nav>
                <LinkProducts to='/'>Products</LinkProducts>
                <LinkCart to='/cart'>
                    <FaShoppingCart />
                    {productsCart.length > 0 && <span>{productsQuantity}</span>}
                </LinkCart>
                <ButtonTheme onClick={toggleTheme}>{isDark ? <FaMoon /> : <FaSun />}</ButtonTheme>
            </Nav>
            
        </HeaderStyled>
    )
}