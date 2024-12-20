import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Cart = ({ cart, setCart }) => {

  const handleCheckOut = () =>{
    alert("This website is a prototype")
  }

  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
  };

  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="min-h-screen py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-xl text-gray-600"> Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            
            <div key={item.id} className="flex justify-between items-center p-6 bg-white rounded-lg shadow-lg border-gray-200 mb-6">
              <div className="flex items-center gap-6 p-4 ">
                <h3 className="text-md font-semibold text-gray-800">
                  {item.title}
                </h3>
                <img
                  src={item.image}
                  alt="Image wasn't found"
                  className="w-auto h-40 object-cover rounded-lg shadow-md"
                />
                
                
                <p className="flex justify-center">
                  ${item.price}
                </p>
              </div>
              
              <div className="flex space-x-4 items-center">
                <button
                  className="text-lg text-red-600 hover:text-red-800 transition-all"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
                
                <div className="flex items-center border-2 border-gray-300 rounded-lg space-x-1">
                  <button onClick={() => handleIncreaseQuantity(item.id)} className="text-xl px-4 py-2 rounded-full hover:bg-gray-100 focus:outline-none transition-all duration-300">
                    + 
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleDecreaseQuantity(item.id)} className="text-xl px-4 py-2 rounded-full hover:bg-gray-100 focus:outline-none transition-all duration-300">
                    -
                  </button>
                
                </div>
                
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-8 bg-gray-50 rounded-lg p-4 shadow-md">
            <span className="text-2xl font-semibold text-gray-800">Total:</span>
            <span className="text-2xl font-semibold text-gray-800">${total.toFixed(2)}</span>
          </div>
        </div>
      )}
      <div className="flex justify-between mt-8">
        <Link
          to="/shop"
          className="text-lg font-normal bg-white text-black border-black border opacity-55 hover:bg-gray-80 py-2 px-4 rounded transform transition-all duration-300 hover:scale-110"
        >
          Continue Shopping
        </Link>
        <button className="text-lg font-light bg-black text-white py-2 px-4 rounded transform transition-all duration-300 hover:scale-110" onClick = {handleCheckOut}>
          Checkout
        </button>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Cart;
