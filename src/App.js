import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);

