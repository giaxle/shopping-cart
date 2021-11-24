import React from "react";
import styled from "styled-components";

const Cart = () => {
    return (
        <CartWrapper>
            <CartTitle>Shopping Cart</CartTitle>
        </CartWrapper>
    )
}

const CartWrapper = styled.div`
    padding: 1rem;
`

const CartTitle = styled.div`
    font-size: 2rem;
    font-weight: bold;
`

export default Cart;