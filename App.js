const heading = React.createElement("h1", {id: "header" }, "Hello Sai Tharun Dusa!");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", {id : "parent"}, React.createElement("div", {id : "child"}, [React.createElement("h1", {}, "I'm a H1 tag"), React.createElement("h2", {}, "I'm a H2 tag")]));

root.render(parent);
