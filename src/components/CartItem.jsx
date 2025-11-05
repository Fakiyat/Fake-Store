import { Minus, Plus, Trash2 } from "lucide-react";
import React from "react";

function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="flex gap-7 border-b border-b-gray-300 pt-10 pb-6">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 object-contain  "
      />
      <div className="flex-1 ">
        <h4 className="font-semibold text-sm">{item.title}</h4>
        <p className="text-purple-700 text-sm font-bold">${item.price}</p>
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="bg-gray-200 p-1 rounded-2xl hover:bg-gray-300"
          >
            <Minus size={16} />
          </button>
          <span className="font-semibold">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="bg-gray-200 p-1 rounded-2xl hover:bg-gray-300"
          >
            <Plus size={16} />
          </button>
          <button
            onClick={() => removeItem(item.id)}
            className="ml-auto text-red-500 hover:text-red-700"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
