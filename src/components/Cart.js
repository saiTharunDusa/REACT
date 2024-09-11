import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-4 m-2">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 p-4 m-auto">
        <ItemsList items={cartItems} />
        {cartItems.length !== 0 && (
          <button
            className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-6              rounded-full                      
    shadow-md hover:shadow-lg         
    transition-all duration-300       
    m-2"
            onClick={handleClick}
          >
            Clear Cart
          </button>
        )}

        {cartItems.length === 0 && (
          <h1>
            Your cart is empty!
            <br /> Are you not hungry? <br /> Please add items to you cart!
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
