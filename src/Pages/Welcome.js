import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const ShopPresentationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40%;
    align-items: center;
    padding: 20px;
    background-color: #5B86AE;
    color: white;
    height: 100vh;
`;


const Button = styled(Link)`
    background-color: #D24E35;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-large;
    padding: 10px;
    width: 20vw;
    height: 10vh;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
  
`;



const WelcomePage = () => {
    return (
        <ShopPresentationContainer>

                <h1 style={{ fontSize: '78px', marginBottom: '15px' }}>DelicateStore</h1>

                <Button to="/home">Voir la liste des produits</Button>

        </ShopPresentationContainer>
    );
};

export default WelcomePage;
