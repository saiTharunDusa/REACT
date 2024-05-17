import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";


// writing in JSX
const jsx_heading = <h1 id="heading">hello world using jsx</h1>;

// react functional component.
const HeadingComponent = () => {
    return (
        <div id = "container">
            <h1 id ="heading"> heading from react functional component</h1>
        </div>
        
    );
}

// component composition
const HeadingComponent1 = ()=>{
    return (
        <div> 
            <HeadingComponent/>
            <h1>heading after component composistion.</h1>
        </div>
    )
}

// In jsx, insider {} braces we could write js expressions
const number = 10;
const HeadingComponent2 = ()=>{
    return (
        <div> 
            <HeadingComponent/>
            <HeadingComponent1/>
            <h1>heading after component composistion.</h1>
            <h2>using {} braces for writing js expressions inside jsx</h2>
            <h2>{number}</h2>
        </div>
    )
}





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2/>);

