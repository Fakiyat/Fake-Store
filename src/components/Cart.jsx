import React from "react";
import CartItem from "./CartItem";
import { ShoppingCart, X } from "lucide-react";

export default function Cart({
  isOpen,
  removeItem,
  updateQuantity,
  toggleCart,
  cart,
}) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;
  return (
    <div className="fixed right-0 top-0 h-full w-[500px] bg-white shadow-2xl z-50 flex flex-col animate-slide-in ">
      {/* Header */}
      <div className="h-15 w-auto bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-6 flex justify-between items-center  ">
        <div className="flex items-center  ">
          <div>
            <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
            <p className="text-blue-100 text-sm pl-10">
              {cart.length} {cart.length === 1 ? "item" : "items"}
            </p>
          </div>
        </div>
        <button
          onClick={toggleCart}
          className="text-black  hover:bg-opacity-20 w-10 h-10 flex items-center justify-center "
        >
          <span className="text-3xl leading-none">
            <X size={25} />
          </span>
        </button>
      </div>

      {/* Cart Content */}
      <div className="flex-1 overflow-y-auto px-10 py-10">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="bg-gray-200 rounded-full p-8 mb-4">
              <ShoppingCart className="text-gray-400" size={64} />
            </div>
            <p className="text-gray-500 text-lg font-medium">
              Your cart is empty
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Add some products to get started!
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="border-t border-gray-200 bg-gray-50 px-6 py-5">
          <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800 font-semibold">
                ${total.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Shipping</span>
              <span className="text-green-600 font-semibold">FREE</span>
            </div>
            <div className="border-t border-gray-200 mt-3 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-blue-600">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4  hover:from-green-600 hover:to-green-700 text-lg shadow-lg hover:shadow-xl transform  transition-all duration-200">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
