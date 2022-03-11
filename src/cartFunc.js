import { itemsInCart } from "./itemsInCart";

const filterItrems = (itemsInCart, itemId) =>
  itemsInCart.filter((it) => it.id === itemId);

const addToCART = (state, item) => {
  let updatedCart;
  if (filterItrems(state.cartItems, item.id).length > 0) {
    updatedCart = state.cartItems.map((it) => {
      if (it.id === item.id) {
        return { ...it, quantity: it.quantity + 1 };
      } else {
        return it;
      }
    });
  } else {
    let items = filterItrems(itemsInCart, item.id)[0];
    updatedCart = [...state.cartItems, items];
  }
  // console.log(updatedCart);
  return { ...state, cartItems: updatedCart };
};

const addToWishlist = (state, item) => {
  let updatedCart;
  if (filterItrems(state.wishlist, item.id).length > 0) {
    updatedCart = state.wishlist.map((it) => {
      if (it.id === item.id) {
        return { ...it, wishCount: it.wishCount + 1 };
      } else {
        return it;
      }
    });
  } else {
    let items = filterItrems(itemsInCart, item.id)[0];
    updatedCart = [...state.wishlist, items];
  }
  return { ...state, wishlist: updatedCart };
};

export { addToCART, addToWishlist };
