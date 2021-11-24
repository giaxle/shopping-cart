import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import homeImage from "../pikachu.png";

const Home = () => {
    return (
        <HomeWrapper>
            <Message>
                <SmallMessage>Get down with the Thiccness</SmallMessage>
                <BigMessage>Welcome to The Thiccachu Project</BigMessage>
                <Link to={'/shop'}>
                    <Button>Support Us</Button>
                </Link>
            </Message>
            <Image src={homeImage}></Image>
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;

    animation: fadeIn ease 2s;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

const Message = styled.div`
    display: flex;
    margin: 20rem auto;
    flex-direction: column;
    width: 80rem;
    line-height: 6rem;

    @media only screen and (max-width: 1024px) {
        margin-top: 0;
        width: 100%;
        padding: 2rem;
        text-align: center;
    }
`

const SmallMessage = styled.div`
    font-size: 1.9rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    @media (max-width: 450px) {
        font-size: 1.4rem;
    }
`

const BigMessage = styled.div`
    font-size 2.5rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
`

const Button = styled.button`
    margin-top: 4rem;
    display: inline-block;
    width: 70%;
    height: 5rem;
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #f9d523;
    border: 1px solid black;

    @media only screen and (max-width: 1024px) {
        margin: 1rem auto;
        width: 60%;
    }

    &:hover {
        background-color: black;
        color: white;
    }
`

const Image = styled.img`
    display: block;
    width: 75rem;
    border-radius: 50%;
    float: right;

    @media only screen and (max-width: 1024px) {
        margin: 20% auto;
        position: absolute;
        z-index: -1;
        width: 100%;
        height: auto;
        opacity: 0.3;
        animation: none;
    }
`

export default Home;