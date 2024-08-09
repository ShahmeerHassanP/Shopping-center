import React from 'react';
import { addItemstoCart, removeCart } from '../features/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';

export default function Checkout() {
  const { items, price , totalItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart Items</h1>
      {items.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex items-center bg-white shadow-md rounded-lg p-4">
                <img src={item.productImage} alt={item.productName} className="w-24 h-24 object-cover rounded-lg mr-4" />
                <div className="flex flex-col justify-between flex-grow">
                  <h2 className="text-xl font-bold mb-2">{item.productName}</h2>
                  <p className="text-gray-700 mb-2">${item.price}</p>
                  <p className="text-gray-700 mb-2 font-bold">Quantity: {item.quantity}</p>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => { dispatch(addItemstoCart(item)) }} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"><FaCartPlus/></button>
                    <button onClick={() => { dispatch(removeCart({ id: item.id })) }} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Clear</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Subtotal</h2>
            <p className="text-gray-700">${price}</p>
            <h2 className="text-lg font-bold mb-1 mt-2">No. of Items </h2>
            <p className="text-gray-700">({totalItems})</p>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4">
          <p className="text-gray-700">Your cart is empty.</p>
        <h2 className="text-xl font-bold mb-2">Subtotal</h2>
        <p className="text-gray-700">${price}</p>
        <h2 className="text-lg font-bold mb-1 mt-2">No. of Items </h2>
        <p className="text-gray-700">({totalItems})</p>
      
        </div>
        
      )}
    </div>
  );
}
