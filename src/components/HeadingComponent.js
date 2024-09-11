import React from "react";
import "./HeadingComponent.css";
import insignia from "./images/insignia.png";
import user from "./images/user.png";
export const HeadingComponent = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src = {insignia}></img>
            </div>
            <div className="search-bar">
            <input type="text" placeholder="Search..." />
            </div>
            <div className="user-icon">
            <img src = {user}></img>
            </div>
           
        </div>
    );
};


