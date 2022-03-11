import { useReducer } from "react";
import "./styles.css";

const itemsInCart = [
  {
    id: 1,
    name: "kala chasma",
    price: 1000,
    quantity: 1,
    wishCount: 1
  },
  {
    id: 2,
    name: "laal chhadi",
    price: 500,
    quantity: 1,
    wishCount: 1
  },
  {
    id: 3,
    name: "jalebi",
    price: 50,
    quantity: 1,
    wishCount: 1
  },
  {
    id: 4,
    name: "japani joota",
    price: 10000,
    quantity: 1,
    wishCount: 1
  }
];

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
export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    cartItems: [],
    wishlist: []
  });
  return (
    <div>
      <h1>Cart Management</h1>
      <h1>My Products</h1>
      {itemsInCart.map((it) => {
        return (
          <div key={it.id}>
            <h2>
              {it.name} || {it.price}
            </h2>
            <button
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: it })}
            >
              Add to Cart
            </button>
            <button
              style={{ marginLeft: "0.5rem" }}
              onClick={() =>
                dispatch({ type: "MOVE_TO_WISHLIST", payload: it })
              }
            >
              Move to Wishlist
            </button>
            <hr />
          </div>
        );
      })}

      <h1>My Cart</h1>
      {state.cartItems.map((it) => {
        return (
          <div key={it.id}>
            <h2>{it.name}</h2>
            <h2>Quantity: {it.quantity}</h2>
            <button
              onClick={() =>
                dispatch({ type: "MOVE_TO_WISHLIST", payload: it })
              }
            >
              Move to Wishlist
            </button>
            <button
              style={{ marginLeft: "0.5rem" }}
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: it })
              }
            >
              Remove
            </button>
          </div>
        );
      })}
      <hr />

      <h1>My Wishlist</h1>
      {state.wishlist.map((it) => {
        return (
          <div key={it.id}>
            <h2>{it.name}</h2>
            <h2>Quantity: {it.wishCount}</h2>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_WISHLIST", payload: it })
              }
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
