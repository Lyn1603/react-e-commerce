import styled from 'styled-components';
import {useCart} from "../Providers/CartContext";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  margin-top: auto;
`;

const CartContainer = styled.div`    
  display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;



const ProductContainer = styled.div`
    margin-top: 20px;
`;

const ProductItem = styled.div`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
`;

const DeleteButton = styled.button`
    background-color: #ff5757;
    width: 50vw;
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
                <h1>Mon panier</h1>
            </Header>
                <h2> Liste des produits </h2>
                <CartContainer>
                    {cart.map((product) => (
                        <ProductContainer key={product.id}>
                            <div>
                                <p>{product}</p>
                            </div>
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
