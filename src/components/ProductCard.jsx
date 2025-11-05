import React from "react";
import { FaCartPlus } from "react-icons/fa";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      {/* Image*/}

      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-5 h-55 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />

        {/* badge */}

        <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-md">
          {product.category}
        </span>
      </div>

      {/* content */}

      <div className="p-10">
        <h3 className="font-bold text-gray-800 text-base mb-2 h-10 overflow-hidden leading-tight">
          {product.title}
        </h3>

        <p className=" text-gray-600 text-sm mb-6 h-12 overflow-hidden leading-relaxed">
          {product.description}
        </p>

        {/* Rating */}

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-sm font-semibold text-gray-700 ml-1">
              {product.rating.rate}
            </span>
          </div>
          <span className="text-xs text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="px-8 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-700 focus:outline-none  focus:ring-blue-400 transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
