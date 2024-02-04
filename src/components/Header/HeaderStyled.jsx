import {styled} from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    max-height: 6rem;
    height: 6rem;
    background-color: ${({theme})=> theme.backgroundHeader};
`

export const Logo = styled(Link)`
    color: ${({theme})=> theme.logoStyle.colorLogo};
    text-decoration: none;
    background-color: ${({theme})=> theme.logoStyle.backgroundLogo};
    padding: 10px 20px;
    font-size: 2.2em;
    font-weight: bolder;
    border-radius: 1rem;
`

export const Nav = styled.nav`
    display: flex;
    gap: 1rem;
    font-size: 1.2em;
`

export const LinkProducts = styled(NavLink)`
    color: ${({theme})=> theme.textColor};
    text-decoration: none;
    padding: 10px 14px;
    border-radius: 1rem;
    display: grid;
    place-items: center;

    &.active {
        background-color: ${({theme})=> theme.linkHover.backgroundLink};
        color: ${({theme})=> theme.linkHover.colorLink};
    }
    
    &:hover {
        background-color: ${({theme})=> theme.linkHover.backgroundLink};
        color: ${({theme})=> theme.linkHover.colorLink};
    }
`

export const LinkCart = styled(NavLink)`
    color: ${({theme})=> theme.textColor};
    text-decoration: none;
    padding: 10px 14px;
    border-radius: 1rem;
    display: grid;
    place-items: center;
    position: relative;
    
    &:hover {
        background-color: ${({theme})=> theme.linkHover.backgroundLink};
        color: ${({theme})=> theme.linkHover.colorLink};
    }

    &.active {
        background-color: ${({theme})=> theme.linkHover.backgroundLink};
        color: ${({theme})=> theme.linkHover.colorLink};
    }

    span {
        display: block;
        color: black;
        background-color: rgb(218, 210, 210);
        border-radius: 100%;
        padding: 0 4px;
        font-size: .7em;
        position: absolute;
        top: 2px;
        right: 4px;
    }
`

export const ButtonTheme = styled.button`
    border: none;
    background-color: transparent;
    font-size: 1.2em;
    cursor: pointer;
    color: ${({theme})=> theme.textColor};
`