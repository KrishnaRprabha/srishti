import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import CartIconWithBadge from './CartIconWithBadge';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl cursor-pointer transition-transform hover:scale-105"
          onClick={() => setSelectedImage(product)}
        />


        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-md text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-600 font-medium">₹{product.price}</p>
        </div>
        <div className="flex justify-center items-center gap-3 mt-2">
          <button
            onClick={handleAdd}
            className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded-md"
          >
            Add to Cart
          </button>


          <button
            onClick={() => navigate("/cart")}
            className="text-amber-700 hover:text-amber-900 transition-transform transform hover:scale-110 mt-2"
            title="View Cart"
          >
            <CartIconWithBadge size={20} />
          </button>





        </div>

      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-2xl p-4 max-w-lg w-[95%] flex flex-col items-center shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt="Full view"
              className="max-h-[70vh] max-w-[90vw] object-contain mb-3 "


            />
            <p className="text-sm text-gray-600 text-center mt-1">
              {selectedImage.description ||
                " "}
            </p>
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-1 text-black hover:bg-gray-200"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
