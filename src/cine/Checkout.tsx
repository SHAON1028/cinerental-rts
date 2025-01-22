import { useSelector } from "react-redux";
import { CartItem } from "../redux/features/cart/cartType";
import { RootState } from "../redux/store";

const Checkout = () => {

    const {items} = useSelector((state: RootState) => state.cart);

    const totalPrice = items.reduce((acc:number, item:CartItem) => acc + item.price * item.quantity, 0);
  return (
    <div className="text-2xl text-center font-semibold my-10">
      Total Price : ${totalPrice.toFixed(2)}
    </div>
  );
}
export default Checkout