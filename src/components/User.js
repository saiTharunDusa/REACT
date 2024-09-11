import { useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  const { name, email } = props;
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="user-card">
      <h1>Functional User Component</h1>
      <h1>Name : {name} </h1>
      <h2>Email : {email}</h2>
      <h3>Count : {count}</h3>
      <button onClick={handleClick}>Count+</button>
      <button
        onClick={function () {
          setCount(count - 1);
        }}
      >
        Count-
      </button>
    </div>
  );
};

export default User;
