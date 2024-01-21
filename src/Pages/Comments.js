import {useGetProductsQuery, useFetchProductsQuery} from "../Services/API"
import styled from "styled-components";
import { useCart } from "../Providers/CartContext"
import {useParams} from "react-router-dom";
import {useState} from "react";



const ListComments = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);  /* Trois colonnes égales */
    gap: 20px;
    margin-top: 20px;

    `;

const Comments = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    `;

const CommentsCard = styled.div`
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
        max-width: 100%;
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


const CommentFormContainer = styled.div`
  margin-top: 20px;
`;

const CommentFormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const CommentFormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
`;

const CommentFormTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
`;

const CommentFormButton = styled.button`
  padding: 10px 15px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2779bd;
  }
`;
export default function () {

    let { productId } = useParams()
    let { data, isFetching } = useGetProductsQuery(productId)
    const [username, setUsername] = useState("");
    const [commentText, setComment] = useState("");
    let {comments, addComment} = useCart()


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username.trim() || !commentText.trim()) return;

        try {
            const response = await fetch(`https://iim.etherial.fr/products/${productId}/comments`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ productId, username, comment: commentText }),
            });

            if (response.ok) addComment({ productId, username, comment: commentText });

            setUsername("");
            setComment("");

        } catch (error) {
            console.error("Error: Failed to add comment to the server" , error);
        }
    };



    return <div>
        {
            isFetching ? <h1> Produit { productId } </h1> : <div>

                <ListComments>
                    <CommentList/>
                </ListComments>

                <h2> Ajouter un commentaire </h2>

            <CommentFormContainer>

                <form onSubmit={handleSubmit}>
                    <CommentFormLabel>
                        Nom d'utilisateur:
                        <CommentFormInput
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </CommentFormLabel>
                    <CommentFormLabel>
                        Commentaire:
                        <CommentFormTextarea
                            value={commentText}
                            onChange={(e) => setComment(e.target.value)}
                        ></CommentFormTextarea>
                    </CommentFormLabel>
                    <CommentFormButton type="submit">
                        Ajouter un commentaire
                    </CommentFormButton>

                </form>
            </CommentFormContainer>

            </div>


        }

    </div>
}

function CommentList() {
    let {productId} = useParams()
    let {data, isFetching} = useFetchProductsQuery(productId)


    return (
        <>

            {isFetching ? (
                <div>Loading...</div>
            ) : !data || data.length === 0 ? (
                <div>No comments available.</div>
            ) : (
                data.map((comment) => (
                    <Comments key={comment.id}>
                        <CommentsCard>
                            <h3>{comment.username}</h3>
                            <p>{comment.comment}</p>
                        </CommentsCard>

                    </Comments>

                ))

            )}


        </>
    );


}






