import styled from 'styled-components';
import {useCart} from "../Providers/CartContext";
import {Link } from "react-router-dom";
import React from "react";
import product from "./Product";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
`;

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #5B86AE;
    color: #fff;
    padding: 10px;
    text-align: center;

    a {
        display: block;
        color: #114675;
        text-decoration: none;
        font-weight: bold;
        margin-top: 10px;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Footer = styled.footer`
    background-color: #5B86AE;
    color: #fff;
    padding: 10px;
    text-align: center;
    margin-top: auto;
`;

const CartContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);  /* Trois colonnes égales */
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;



const ProductContainer = styled.div`
    background-color: rgba(148, 169, 187, 0.45);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    margin: 10px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


const DeleteButton = styled.button`
    background-color: #D24E35;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

export default function Cart() {
    let { cart, deleteCart } = useCart();

    return (
        <PageContainer>
            <Header>
                <Link to={`/home/`}> <h4> Retour </h4>  </Link>
            </Header>
            <h2> Mon panier </h2>
            <CartContainer>
                {cart.map((product) => (
                    <ProductContainer key={product.id}>
                        <p>{product}</p>
                    </ProductContainer>
                ))}
            </CartContainer>
            <DeleteButton onClick={deleteCart}>Supprimer la liste</DeleteButton>



            <Footer>
                <p>&copy; 2024 Mon Super Site. Tous droits réservés.</p>
            </Footer>
        </PageContainer>
    );

}