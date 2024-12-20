import { useEffect } from "react";
import { useState } from "react";
import AddToCartButton from "./components/AddToCartButton";
import PropTypes from "prop-types";

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

const Items = ({ handleAddtoCart }) => {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);
  // console.log(cart);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error getting products: ", error);
        setError("Failed to fetch products");
      }
    };

    fetchItems();
    // const savedCart = JSON.parse(localStorage.getItem("cart"));
    // if (savedCart) {
    //     setCart(savedCart);
    // }
  }, []);

  // const handleAddtoCart = (product) => {
  //     setCart((prevCart) => {
  //       const existingItem = prevCart.find((item) => item.id === product.id);
  //       if (existingItem) {
  //         // Update quantity if product already exists in the cart
  //         return prevCart.map((item) =>
  //           item.id === product.id
  //             ? { ...item, quantity: item.quantity + 1 }
  //             : item
  //         );
  //       } else {
  //         // Add new product with quantity 1
  //         return [...prevCart, { ...product, quantity: 1 }];
  //       }
  //     });
  //     alert(`${product.title} added to the cart!`);
  // }

  return (
    <div className="min-h-screen bg-gray-100">
        <header className="bg-gray-800 text-white py-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-2">Welcome to Our Store</h1>
                <p className="text-sm">Explore out exclusive collection of amazing products!</p>
            </div>
        </header>


      <div className="flex justify-center items-center min-h-screen">
        {error && <p>{error}</p>}
        {products.length > 0 ? (
          <div className="p-4 text-center grid grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform hover:cursor-pointer"
              >
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-auto h-40 object-cover mb-2 mx-auto"
                />
                {/* <p>{product.description}</p> */}
                <p className="font-bold transform -translate-y-2">
                  ${product.price}
                </p>
                <AddToCartButton
                  product={product}
                  onClick={() => handleAddtoCart(product)}
                />
              </div>
            ))}
          </div>
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

Items.propTypes = {
  handleAddtoCart: PropTypes.func.isRequired,
};

export default Items;
