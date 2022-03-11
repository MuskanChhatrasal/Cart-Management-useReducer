import { useCart } from "./cart-context";

const Cart = () => {
  const { state, dispatch } = useCart();
  return (
    <div>
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
    </div>
  );
};

export default Cart;
