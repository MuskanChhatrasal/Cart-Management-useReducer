import { createContext, useContext, useReducer } from "react";
import { addToCART, addToWishlist } from "./cartFunc";

const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addToCART(state, action.payload);

    case "MOVE_TO_WISHLIST":
      return addToWishlist(state, action.payload);

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((it) => it.id !== action.payload.id)
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((it) => it.id !== action.payload.id)
      };
    default:
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    cartItems: [],
    wishlist: []
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, useCart };
