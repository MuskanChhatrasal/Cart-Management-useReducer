import { useCart } from "./cart-context";

const Wishlist = () => {
  const { state, dispatch } = useCart();
  return (
    <div>
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
};

export default Wishlist;
