import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterWrapper>A tribute to the captain! Copyright © Giaxle </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 0;
    font-size: 1.5rem;
    font-weight: bold;
`
export default Footer;