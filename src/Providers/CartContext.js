import { createContext, useContext, useState } from "react";

const CartContext = createContext()


export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [comments, setComments] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }
    const deleteCart = (item) => {
       setCart(['']);
    }

    const addComment = (item) => {
        setComments([...comments, item]);
    }

    return (<CartContext.Provider value={{ cart, addToCart, deleteCart, addComment }}>
        {children}
    </CartContext.Provider>)
}

export function useCart() {
    return useContext(CartContext)
}

