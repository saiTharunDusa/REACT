import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

/*
    Building a food delivery app.
    1. Types of components that could be included in the app.
    -Header:
        - Logo
        - Nav items
    -Body:
        - Search Bar
        - Restaurant Container
            - Restaurant Card
                - image
                - Name of the Res, rating, delivery time
    -Footer:
        -Copyright
        -Links
        -Address
        -Contact
*/

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ],
        errorElement: <Error/>
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

