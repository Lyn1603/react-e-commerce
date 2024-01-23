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
    align-items: center;
    background-color: #5B86AE;
    color: #fff;
    padding: 10px;
    text-align: center;

    a {
        display: block;
        color: #D24E35;
        text-decoration: none;
        font-weight: bold;
        margin-top: 10px;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Basket = styled.div`

    background-color: rgba(148, 169, 187, 0.45);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

`;

const Main = styled.main`
    background-color: rgba(207, 158, 118, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Footer = styled.footer`
    background-color: #5B86AE;
    color: #fff;
    padding: 10px;
    text-align: center;
`;


const ListProducts = styled.div`
    display: grid;
    margin-left: 10%;
    grid-template-columns: repeat(3, 0.5fr);  /* Trois colonnes égales */
    gap: 20px;
    margin-top: 20px;
    
`;

const ProductCard = styled.div`
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
        color: #CF9E76;
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
            <h1> DelicateStore </h1>
            <Basket>
                <h3> Mon panier : {cart.length} </h3>
                <Link to={`/articles/`}>  <p> Voir mon panier </p> </Link>
            </Basket>

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
            <p>© 2024 Lynda Benabdessadok. Tous droits réservés.</p>
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

