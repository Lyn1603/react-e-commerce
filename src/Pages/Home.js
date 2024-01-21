import { useGetProductsQuery, useFetchProductsMutation } from "../Services/API"
import { useCart } from "../Providers/CartContext"
import styled from "styled-components";
import {Link, useParams} from "react-router-dom";
import React from "react";
import product from "./Product";


const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #3498db;
    color: #fff;
    padding: 10px;
    text-align: center;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Footer = styled.footer`
    background-color: #2ecc71;
    color: #fff;
    padding: 10px;
    text-align: center;
`;


const ListProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);  /* Trois colonnes égales */
    gap: 20px;
    margin-top: 20px;
    
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
export default function () {

    let { productId } = useParams()
    let { cart, addToCart } = useCart()
    let { data, isFetching } = useGetProductsQuery()

    return <div>
        <Header>
            <h1>Mon Site Web</h1>
            <div>
                <p> Mon panier : {cart.length} </p>
                <Link to={`/articles/1`}> Voir mon panier </Link>
            </div>

        </Header>
        {
            isFetching ? <h1> La liste des produits disponible </h1> : <Main>

                {/*    <button onClick={() => {
                    addToCart("Coca")
                    // createArticle({ title: "Hello", content: "My Content" })
                }}> Créer un produit
                </button> */}
                {/* Articles Count: {data.length} */}

                {/* <ArticlesList /> */}



              <ListProducts>
                  <ProductList/>
              </ListProducts>

            </Main>

        }

        <Footer>
            <p>© 2024 Mon Site Web. Tous droits réservés.</p>
        </Footer>
    </div>
}

function ProductList() {

    let {data, isFetching} = useGetProductsQuery()

    return data.map((product) => {

        return <ProductCard>
                <img src={product.image}/>
                <h3>{product.title}</h3>
            <Link to={`/products/${product.id}`}>Voir les détails</Link>

        </ProductCard>

    })
}

function ArticlesList() {

    let { data, isFetching } = useGetProductsQuery()

    return data.map((article) => {
        return <h3>{article.title}</h3>
    })

}

