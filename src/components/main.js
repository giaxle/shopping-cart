import React from "react";
import styled from "styled-components";
import { Routes, Route  } from "react-router-dom";
import Home from "../views/Home";
import Shop from "../views/Shop";
import Cart from "../views/cart";

const Main = () => {
    return (
        <MainWrapper>
            <Routes>
                <Route exact path={'/'} element={<Home />} />
                <Route exact path={'/shop'} element={<Shop />} />
                <Route exact path={'/cart'} element={<Cart />} />
            </Routes>
        </MainWrapper>
    )
}

const MainWrapper = styled.main`
    width: 100%;
    margin: 0 auto;
    padding: 4rem;

    @media only screen and (max-width: 1024px) {
        padding: 0;
    }
`

export default Main;