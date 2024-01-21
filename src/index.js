import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home';
import Articles from './Pages/Articles';
import Welcome from "./Pages/Welcome";
import Product from "./Pages/Product";
import { Provider } from 'react-redux';
import { store } from './store';
import {CartProvider} from "./Providers/CartContext";
import Comments from "./Pages/Comments";

const router = createBrowserRouter([
    {

    },
    {
        path: "/",
        element: <Welcome/>,
    },
    {
        path: "/home",
        element: <Home />
    },

    {
        path: "/products/:productId",
        element: <Product/>,
    },
    {
        path: "/articles/:id",
        element: <Articles />
    },
    {
        path: "/products/:productId/comments",
        element: <Comments />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store} >
            <CartProvider>
                <RouterProvider router={router} />
            </CartProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();