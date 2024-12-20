import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Items from "./Items";
import CartIcon from "./icons/cart.svg";
import BackgroundImg from "./images/clothingBackground.avif";
import MenuIcon from "./icons/menuBar.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InstaIcon from "./icons/insta.svg";
import YoutubeIcon from "./icons/youtube.svg";
import TiktokIcon from "./icons/tiktok.svg";
import Cart from "./Cart";
// import AddToCartButton from "./components/AddToCartButton";

function App() {
  const [cart, setCart] = useState([]);
  const [navOpen, setNavOpen] = useState(false); // To control navbar state
  // const location = useLocation(); // Get the current route
  // const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);
  useEffect(() => {
    // Load the cart from localStorage on component mount
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);
  const handleToggleNavbar = () => {
    setNavOpen((prev) => !prev);
  };
  // const isShopPage = location.pathname === "/shop"; // Check if we are on the Shop page
  const handleClickSub = () => {
    alert("thank you for subscribing!");
  };
  const handleAddtoCart = (product) => {
    console.log("Adding to cart:", product);

    // Access the cart from localStorage if it's available
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = savedCart.findIndex(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProductIndex !== -1) {
      // Product exists in cart, update the quantity
      updatedCart = savedCart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Product doesn't exist, add to cart with quantity 1
      const newProduct = {
        id: product.id, // Ensure ID is explicitly set or default to null
        title: product.title, // Fallback if title is missing
        price: product.price, // Fallback price to 0
        quantity: 1, // Default quantity for new product
        image: product.image, // Fallback to empty string if no image
      };
      updatedCart = [...savedCart, newProduct];
    }
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCart(updatedCart);

    alert(`${product.title} added to the cart!`);
  };
  return (
    <div className="">
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="relative bg-white py-6 shadow-md">
          <Link
            to="/"
            className="text-2xl mx-auto flex justify-center max-w-max pl-4 pr-4"
          >
            Eterna Luxe
          </Link>

          {/* <Navbar /> */}

          <img
            src={MenuIcon}
            alt="Menu Icon"
            className={`w-9 h-8 cursor-pointer absolute top-6 left-8 transition-opacity duration-300${
              navOpen ? "opacity-0" : "opacity-100"
            }`}
            onClick={handleToggleNavbar}
          />

          <Link to="/cart" className="absolute top-6 right-8">
            <span className="absolute bg-red-600 right-7 -top-5 text-white font-bold px-1 text-sm rounded-full shadow-md transform translate-x-8 translate-y-4">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>

            <img
              src={CartIcon}
              alt="cart Icon"
              className={`w-9 h-9 cursor-pointer${navOpen ? "z-10" : "z-40"}`}
            />
          </Link>
        </div>

        {/* Navbar */}
        <Navbar
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          className={`fixed top-0 left-0 w-1/2 h-full bg-gray-800 text-white z-50 transition-transform duration-300 ${
            navOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          // size = {Cart.length}
        />
      </header>

      {/* Route Definitions */}
      <div className="pt-20">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div className="relative w-full h-56 ">
                <img
                  src={BackgroundImg}
                  alt="background img"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-left justify-between text-black p-8 ml-5">
                  <h1 className="text-2xl font-serif font-bold shadow-md bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl inline-block max-w-max">
                    Timeless elegance,
                    <br /> tailored for you.
                  </h1>
                  <p className="mt-2 text-md font-semibold italic shadow-md bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl inline-block max-w-max">
                    We craft every piece with precision,
                    <br /> using refined materials and a commitment to
                    sophistication.
                  </p>
                  <Link
                    to="/shop"
                    className="text-white mt-4 max-w-max shadow-md opacity-80 bg-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-900 hover:scale-105 focus:outline-none"
                  >
                    Shop Now
                  </Link>
                </div>

                <div className="">

                  {/* Testimonials */}
                  <div className="text-center py-12 bg-gray-50">
                    <h2 className="text-3xl font-bold mb-6">
                      What Our Customers Say
                    </h2>
                    <div className="max-w-4xl mx-auto">
                      <div className="flex flex-col md:flex-row justify-center gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
                          <p className="text-lg text-gray-700 mb-4">
                            &quot;Eterna Luxe has changed the way I shop for
                            clothes! Their designs are timeless, and I feel so
                            confident wearing their pieces. Highly
                            recommend!&quot;
                          </p>
                          <p className="font-semibold text-gray-900">
                            Sophia W.
                          </p>
                          <p className="text-sm text-gray-500">
                            Fashion Enthusiast
                          </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
                          <p className="text-lg text-gray-700 mb-4">
                            &quot;The quality of the fabrics is unmatched, and
                            the customer service is top-notch. I&rsquo;ve never
                            been happier with my wardrobe choices!&quot;
                          </p>
                          <p className="font-semibold text-gray-900">John D.</p>
                          <p className="text-sm text-gray-500">
                            Business Executive
                          </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
                          <p className="text-lg text-gray-700 mb-4">
                            &quot;Eterna Luxe&rsquo;s attention to detail is
                            incredible. Every piece feels custom-made for me,
                            and I always receive compliments when I wear
                            them!&quot;
                          </p>
                          <p className="font-semibold text-gray-900">
                            Emily S.
                          </p>
                          <p className="text-sm text-gray-500">Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Brand Story */}
                  <div className="text-center py-12 bg-gray-50">
                    <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-700">
                      Eterna Luxe was founded with a single mission: to create
                      timeless, elegant clothing that empowers individuals to
                      feel confident and sophisticated. Our journey began with a
                      deep passion for quality craftsmanship and a commitment to
                      designing pieces that transcend trends.
                      <br />
                      <br />
                      Inspired by classic aesthetics and refined materials, we
                      believe that fashion should be both beautiful and lasting.
                      Each garment we create is a blend of tradition and
                      innovation, combining the finest fabrics with modern, yet
                      timeless, designs. From our humble beginnings to becoming
                      a renowned name in the luxury fashion industry, our story
                      is one of dedication, vision, and a relentless pursuit of
                      excellence.
                      <br />
                      <br />
                      At Eterna Luxe, we are more than just a clothing brand –
                      we are a movement that celebrates individuality, elegance,
                      and the art of dressing well. We are grateful for the
                      journey that brought us here and look forward to creating
                      more iconic pieces that stand the test of time.
                    </p>
                  </div>
                </div>

                {/*About section*/}
                <div className="bg-black text-white py-8 px-4 grid grid-cols-3 gap-6">
                  {/* Left Column: Title */}
                  <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold bg-white text-black max-w-max px-4 py-2 rounded">
                      Eterna Luxe
                    </h1>
                  </div>

                  {/* Middle Column: Navigation and Rights Reserved */}
                  <div className="flex flex-col items-center space-y-4 mt-5">
                    <div className="flex flex-col items-center">
                      <Link to="/" className="hover:underline text-lg">
                        Home
                      </Link>
                      <Link to="/shop" className="hover:underline text-lg p-8">
                        Shop
                      </Link>
                    </div>
                    <p className="text-sm text-gray-400 mt-auto">
                      © 2024 Eterna Luxe. All Rights Reserved.
                    </p>
                  </div>

                  {/* Right Column: Subscribe and Social Icons */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-full">
                      <p className="font-medium text-sm text-center mb-2">
                        SUBSCRIBE TO RECEIVE SPECIAL OFFERS
                      </p>
                      <p className="text-sm text-center mb-4">
                        Be the first to know about upcoming launches, events,
                        and much more!
                      </p>
                      <div className="flex justify-center">
                        <input
                          placeholder="Enter email"
                          className="px-4 py-2 rounded-l-md border-none focus:outline-none text-black w-2/3"
                        />
                        <button
                          className="bg-white text-black px-4 py-2 rounded-r-md font-semibold hover:bg-gray-300 transition-all"
                          onClick={handleClickSub}
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <Link
                        to="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-110"
                      >
                        <img
                          src={InstaIcon}
                          alt="Instagram"
                          className="w-8 h-8"
                          style={{ filter: "invert(1)" }}
                        />
                      </Link>
                      <Link
                        to="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-110"
                      >
                        <img
                          src={TiktokIcon}
                          alt="Tiktok"
                          className="w-8 h-8"
                          style={{ filter: "invert(1)" }}
                        />
                      </Link>
                      <Link
                        to="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-110"
                      >
                        <img
                          src={YoutubeIcon}
                          alt="Youtube"
                          className="w-8 h-8"
                          style={{ filter: "invert(1)" }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          {/* Shop Page */}
          <Route
            path="/shop"
            element={
              <div className="min-h-screen">
                {/* Shop-specific content will go here */}
                <Items handleAddtoCart={handleAddtoCart} />
              </div>
            }
          />
          <Route
            path="/cart"
            element={
              <div className="min-h-screen">
                <Cart
                  handleAddtoCart={handleAddtoCart}
                  cart={cart}
                  setCart={setCart}
                />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
