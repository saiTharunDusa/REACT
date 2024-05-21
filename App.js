import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";
import logo from "./logo.png";
import cart from "./cart.png";

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

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
            <img className = "logo" src = {logo}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><img className="cart" src = {cart}></img></li>
                </ul>
            </div>
            
        </div>
    );
}

const RestaurantCard = ({resName, cuisine}) => {
    return (
        <div className="res-card">
            
            <img className = "res-img"src = "https://b.zmtcdn.com/data/pictures/9/20983729/85d9095f435204f8b3638c47b9ac7fb0_featured_v2.jpg"/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 Stars</h4>
            <h4>38 Del Time</h4>
        </div>
    );
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard resName = "Meghana Food" cuisine = "Biryani, North Indian, Asian"/>
                <RestaurantCard resName = "KFC" cuisine = "Chicken, Fast Food"/>
                
            </div>

        </div>
    );
}

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

