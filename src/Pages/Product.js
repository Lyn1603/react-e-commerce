import {useGetProductsQuery, useGetCommentsQuery, productsAPI} from "../Services/API"
import styled from "styled-components";
import { useCart } from "../Providers/CartContext";
import {Link, useParams} from "react-router-dom";
import React from "react";


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
    background-color: #3498db;
    color: #fff;
    padding: 10px;
    text-align: center;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 20px;

    a {
        display: block;
        color: #3498db;
        text-decoration: none;
        font-weight: bold;
        margin-top: 10px;

        &:hover {
            text-decoration: underline;
        }

    }
`;


const ProductCard = styled.div`
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

    img {
        max-width: 60%;
        height: auto;
        border-radius: 5px;
    }

    h3 {
        margin-top: 10px;
        font-size: 18px;
    }

    p {
        margin: 10px 0;
        font-size: 14px;
    }
    
`;

const AddButton = styled.button`
    background-color: #51a301;
    width: 10vw;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  margin-top: auto;
`;


export default function () {

    let { productId } = useParams()
    let { data, isFetching } = useGetProductsQuery()

    return <PageContainer>

        <Header>
            <h2> Description </h2>
        </Header>
        {
            isFetching ? <h1> Produit { productId } </h1> : <Main>

                <ProductList/>
                <Link to={`/products/${productId}/comments`}>Voir les commentaires </Link>



            </Main>


        }


        <Footer>
            <p>© 2024 Mon Site Web. Tous droits réservés.</p>
        </Footer>

    </PageContainer>
}

function ProductList() {
    let { productId } = useParams()
    let { cart, addToCart } = useCart()
    let { data, isFetching } = useGetProductsQuery()

    return data.map((product) => {

        return <div>
            {
                product.id === productId ? <ProductCard>

                    <img src={product.image}/>
                    <h3>{product.title}</h3>
                    <p> Date : {product.date}</p>
                    <p> Prix : {product.price}</p>
                    <p> Quantité : {product.quantity}</p>
                    <AddButton onClick={() => {
                        addToCart('Produit :' + ' ' + product.title + ' ' + 'Prix : ' + ' ' + product.price + '€')
                    }}> Ajouter au panier
                    </AddButton>

                </ProductCard> : <p></p>
            }

        </div>


    })

}






