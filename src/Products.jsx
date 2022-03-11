import { useCart } from "./cart-context";
import { itemsInCart } from "./itemsInCart";

const Products = () => {
  const { dispatch } = useCart();
  return (
    <div>
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
    </div>
  );
};

export default Products;
