// Import des modules nécessaires
import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";


// Styles pour la page de présentation de la boutique
const ShopPresentationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f8f9fa;
    color: #495057;
    min-height: 100vh;
`;

const ShopDescription = styled.p`
    max-width: 600px;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
    color: #495057;
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    h2 {
        font-size: 24px;
        margin-bottom: 10px;
        color: #343a40;
    }

    p {
        font-size: 16px;
        text-align: center;
        color: #495057;
        margin: 5px 0;
    }
`;

const Button = styled.button
    `
    width: 10%;
    border-radius: 35px;
    background-color: #61dafb;

`;


const WelcomePage = () => {
    return (
        <ShopPresentationContainer>


            <h1>Bienvenue dans Notre Boutique en Ligne</h1>

            <ShopDescription>
                Découvrez une sélection exclusive de produits de qualité. Chez nous, vous trouverez tout ce dont vous avez besoin, du dernier cri aux classiques intemporels.
            </ShopDescription>

            <ContactInfo>
                <h2>Contactez-nous</h2>
                <p>Pour toute question ou information supplémentaire, n'hésitez pas à nous contacter.</p>

            </ContactInfo>

            <Button>

                <Link to="/home"> Voir la liste des produits </Link>

            </Button>


        </ShopPresentationContainer>




    );
};

export default WelcomePage;
