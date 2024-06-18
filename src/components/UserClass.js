import React from "react";
import { Link } from "react-router-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {},
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/saiTharunDusa");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }
  render() {
    const { email } = this.props;
    const { count } = this.state;
    const {
      avatar_url,
      repos_url,
      name,
      company,
      location,
    } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Class Based Component</h1>
        <img src={avatar_url}></img>
        <h2>{name}</h2>
        <h3>{email}</h3>

        <h3>{company}</h3>
        <h3>{location}</h3>
        <h3>
          <Link to={repos_url}>Github</Link>
        </h3>
        <h3>Do you want to play around with the count?</h3>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count+
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Count-
        </button>
      </div>
    );
  }
}

export default UserClass;
