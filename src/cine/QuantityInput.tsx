import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtoCart, decreaseQuantity } from "../redux/features/cart/cartSlice";
import { CartItem } from "../redux/features/cart/cartType";

const QuantityInput = ({movie}:{movie:CartItem}) => {
  const [quantity, setQuantity] = useState(movie.quantity);
  const dispatch = useDispatch()


  console.log(quantity)
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
    dispatch(addtoCart(movie))
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    dispatch(decreaseQuantity(movie.id))
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else {
      setQuantity(1); // Reset to 1 if the value is invalid or non-positive
    }
  };


  const isDisabled = quantity === 1;

  console.log(isDisabled)
  return (
    <div className="flex items-center space-x-2">
      {/* Decrease Button */}
      <button
        onClick={handleDecrease}
        disabled={isDisabled} // Disable when quantity is 1
        className={`px-3 py-1 rounded ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
        } bg-gray-200 text-gray-700 hover:bg-gray-300`}
      >
        -
      </button>
      {/* Quantity Input */}
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        className="w-16 text-center border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
        min="1"
      />

      {/* Increase Button */}
      <button
        onClick={handleIncrease}
        className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-3 py-1 rounded"
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
