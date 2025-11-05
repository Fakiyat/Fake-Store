import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";
import { Loader, ShoppingCart } from "lucide-react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setCart(
        cart.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className=" bg-gray-100 min-h-screen  ">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 shadow-lg sticky top-0 z-50">
        <div className="w-auto mx-auto px-4 py-5 ">
          <div className="flex justify-between items-center ">
            {/* Left spacer for centering */}
            {/* Centered Title */}
            <div className="   flex-1 flex justify-center items-center  ">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-white tracking-wide mb-1">
                  Fake Store
                </h1>
                <p className="text-blue-100 text-sm font-light tracking-widest">
                  SHOP THE LATEST TRENDS
                </p>
              </div>
            </div>

            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="absolute right-10 text-white  transform hover:scale-110 transition-all duration-200"
            >
              <ShoppingCart size={25} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold shadow-lg animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <main className="w-auto mx-auto px-4 py-8">
        {loading ? (
          <p className="text-center text-xl">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        )}
      </main>

      {/* Cart Sidebar */}
      <Cart
        cart={cart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        isOpen={isCartOpen}
        toggleCart={toggleCart}
      />

      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40"
          onClick={toggleCart}
        />
      )}
    </div>
  );
}
