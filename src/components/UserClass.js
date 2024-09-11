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
      <div className="flex-col items-center p-4 mx-[450px] mb-4 bg-orange-100  rounded-lg">
        <h1 className="text-xl mx-[240px] my-4">About Us!</h1>
        <img className="rounded-lg mx-12 my-2" src={avatar_url}></img>
        <h2 className="mx-[200px] my-2 font-semibold">{name}</h2>
        <h3 className="mx-[200px] my-2 font-semibold">{email}</h3>

        <h3 className="mx-[110px] my-2 font-semibold">{company}</h3>
        <h3 className="mx-[200px] my-2 font-semibold">{location}</h3>
        <h3 className="mx-[200px] my-2 font-semibold text-blue-400">
          <Link to={repos_url}>Github</Link>
        </h3>
        <h3 className="mx-[200px] my-6 font-semibold">
          Do you want to play around with the count?
        </h3>
        <h3 className="mx-[240px] my-2 font-semibold">Count: {count}</h3>
        <button
          className="px-4 py-2 bg-slate-50 m-4 rounded-lg font-semibold mx-[130px]"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count+
        </button>
        <button
          className="px-4 py-2 bg-slate-50 m-4 rounded-lg font-semibold"
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
