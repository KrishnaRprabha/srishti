import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
  updateCustomization,
} from "../redux/cartSlice";
import { Trash2Icon,HomeIcon,PlusIcon, MinusIcon } from "lucide-react";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", mobile: "",address:"", email: "" });


  const handleOrder = () => {
  const name = formData.name;
  const mobile = formData.mobile;
  const email = formData.email;
  const address = formData.address;

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }


  const message = `Hello, I'd like to confirm my order for Srishti by Krishna:

${cart
  .map(
    (item, i) =>
      `${i + 1}. ${item.name} - ₹${item.price} × ${item.quantity}${
        item.customization ? ` (Customization: ${item.customization})` : ""
      }`
  )
  .join("\n")}

Name: ${name}
Mobile: ${mobile}
Email: ${email}
Address:${address}
`;

  
  const encodedMessage = encodeURIComponent(message.trim());
  const phoneNumber = "919562213392";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
  dispatch(clearCart());
  navigate("/thankyou");
};
const isDisabled =
  !formData?.name?.trim() || !/^[6-9]\d{9}$/.test(formData?.mobile?.trim());

console.log(isDisabled)
console.log("FormData:", formData);

  return (
    <div className="p-6 max-w-2xl mx-auto">
       <div>
        <Link
          to="/"          
        >
          <HomeIcon size={24} className="text-gray-700 hover:text-amber-500 transition" />
        </Link>
        </div> 
      <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">No items in cart.</p>

      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl shadow-sm p-4 mb-4 bg-white hover:shadow-md transition"
            >
              {/* Name + Price Row */}
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-semibold text-gray-800">{item.name}</h2>
                <div className="flex justify-end mt-2">
                 <p className="text-gray-700 font-medium">
                    ₹{item.price * item.quantity}
                  </p>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-600 hover:text-red-800 transition-transform transform hover:scale-110"
                  title="Remove item"
                >
                  <Trash2Icon size={20} />
                </button>
              </div>
               
                
              </div>

               <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}
                    className="p-1 border rounded hover:bg-gray-100"
                  >
                    <MinusIcon size={16} />
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}
                    className="p-1 border rounded hover:bg-gray-100"
                  >
                    <PlusIcon size={16} />
                  </button>
                </div>

              <label className="block mt-2 text-sm text-gray-600">
                Wish to customize this product?
              </label>
              <textarea
                value={item.customization}
                onChange={(e) =>
                  dispatch(
                    updateCustomization({
                      id: item.id,
                      customization: e.target.value,
                    })
                  )
                }
                placeholder="Add your custom request..."
                className="w-full p-2 border rounded-md mt-1 text-sm"
              />

              {item.customization && (
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-amber-600">
                    Final amount will depend on the customization.
                  </p>
                  <button
                    onClick={() =>
                      dispatch(
                        updateCustomization({ id: item.id, customization: "" })
                      )
                    }
                    className="text-red-600 hover:text-red-800 transition-transform transform hover:scale-110"
                    title="Remove customization"
                  >
                    <Trash2Icon size={18} />
                  </button>
                </div>
              )}

              
            
            </div>
          ))}

         
          <div className="mt-8 space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded-md"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              
            />
            <input
              type="tel"
              placeholder="Phone (10 digits)"
              className="w-full p-2 border rounded-md"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData,  mobile: e.target.value })}
              
            />
            <label className="block text-sm text-gray-600">Delivery Address</label>
            <textarea
            placeholder="Enter your full delivery address"
            className="w-full p-2 border rounded-md mt-1 text-sm"
            rows={3}
            value={formData.address}
            onChange={(e) => setFormData({ ...formData,  address: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-md"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData,  email: e.target.value })}
            />

            <button 
              onClick={handleOrder}
             disabled={isDisabled}
  className={`mt-4 w-full py-2 rounded-lg font-semibold transition-all duration-200
    ${
      isDisabled
        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
        : "bg-green-500 hover:bg-green-600 text-white hover:scale-105 cursor-pointer shadow-md"
    }`}
>

              Send Order via WhatsApp
            </button>
           
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
