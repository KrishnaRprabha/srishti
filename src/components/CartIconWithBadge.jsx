// src/components/CartIconWithBadge.jsx
import { ShoppingCartIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartIconWithBadge = ({ size = 23 }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const totalCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => navigate("/cart")}
        className="transition-transform transform hover:scale-110"
      >
        <ShoppingCartIcon size={size} className="text-amber-600" />
      </button>

      {totalCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center">
          {totalCount}
        </span>
      )}
    </div>
  );
};

export default CartIconWithBadge;
