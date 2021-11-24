import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <Logo>The Thiccachu Project</Logo>
                <NavBar>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to={'/shop'}>Shop</NavLink>
                    <NavLink to={'/cart'}>Cart</NavLink>
                </NavBar>
            </Container>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    background-color: #f9d523;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`

const Logo = styled.h1`
    font-size: 3rem;
`
const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    font-size: 2.4rem;
`

const NavLink = styled(Link)`
    padding: 1rem;
    text-decoration: none;
    color: black;
    font-weight: bold;
    border-radius: .5rem;

    &:hover {
        background-color: black;
        color: white;
    }

    @media only screen and (max-width: 600px) {
        padding: 0;
    }
`

export default Header;