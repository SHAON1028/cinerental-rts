import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "./cartType";

const loadCartFromLocalStorage = (): CartState => {
  const savedCart = localStorage.getItem("cartData");
  if (savedCart) {
    return JSON.parse(savedCart);
  }
  return {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  };
};

const initialState:CartState = loadCartFromLocalStorage();



export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 1. add to cart
    addtoCart: (state, action: PayloadAction<CartItem>) => {

        console.log(action.payload)
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push(action.payload);
        state.totalQuantity += 1;
      }

     
       localStorage.setItem("cartData", JSON.stringify(state));
    },
decreaseQuantity : (state,action: PayloadAction<string>) =>{
        console.log(action.payload);
        const itemIndex = state.items.findIndex(
          (item) => item.id === action.payload
        );

        if (itemIndex !== -1 && state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        }

        localStorage.setItem("cartData", JSON.stringify(state));
},
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items.splice(itemIndex, 1);
      }

      localStorage.setItem("cartData", JSON.stringify(state));
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;


      localStorage.setItem("cartData", JSON.stringify(state));
    },

    
  },
});

export const { addtoCart, removeFromCart, clearCart, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
