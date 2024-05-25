import logo from "../../images/logo.png";
import cart from "../../images/cart.png";
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

export default Header;