import React from 'react'
import { PRODUCTS } from '../products'
import { addItemstoCart, removeCart } from '../features/cartSlice';
import { useSelector, useDispatch } from 'react-redux';


export default function Product() {
  const {items, totalItems, price, quantity } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  
  return (
    <div className="container mx-auto p-4">
      <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <li key={product.id} className="m-12 bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:-translate-y-2">
            <img src={product.productImage} alt={product.productName} className="w-full h-auto object-cover" />
            <div className="p-4 bg-sky-100">
              <h2 className="text-xl font-bold mb-2">{product.productName}</h2>
              <p className="text-gray-700 mb-4">${product.price}</p>
              
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={()=>{dispatch(addItemstoCart(product))}}>Add to Cart</button>
              <button onClick={()=>{dispatch(removeCart({id:product.id}))}} className="bg-red-500 text-white mx-2 px-4 py-2 rounded hover:bg-red-600" >Clear</button>
              
            </div>
          </li>
          
        ))}
      </ul>
    </div>
  )
}
