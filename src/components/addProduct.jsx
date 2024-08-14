import React, { useEffect, useState } from 'react';
import { db } from "../config/firebase";
import { addDoc, getDocs, collection } from 'firebase/firestore';

export const AddProduct = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const itemsCollectionRef = collection(db, "store-items");

  const AddProductToStore = async () => {
    try {
      await addDoc(itemsCollectionRef, {
        title: newTitle,
        price: newPrice,
      });
      setNewTitle("");
      setNewPrice(0);
      // Fetch updated product list after adding a new product
      fetchProducts();
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  const fetchProducts = async () => {
    try {
      const data = await getDocs(itemsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(filteredData);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        <div className="mb-6 text-center text-xl font-semibold text-gray-700">
          Add a New Product
        </div>
        <input
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Title..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Price..."
          type="number"
          value={newPrice}
          onChange={(e) => setNewPrice(Number(e.target.value))}
        />
        <button
          onClick={AddProductToStore}
          className="w-full px-3 py-2 font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-600"
        >
          Add Product
        </button>
      </div>
      <div className="mt-6 w-full max-w-sm">
        <h2 className="text-lg font-semibold text-gray-700">Existing Products:</h2>
        <ul className="list-disc list-inside">
          {products.map((product) => (
            <li key={product.id} className="text-gray-600">
              {product.title} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
