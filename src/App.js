import "./styles.css";
import Products from "./Products";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

export default function App() {
  return (
    <div>
      <h1>Cart Management</h1>
      <Products />
      <Cart />
      <hr />
      <Wishlist />
    </div>
  );
}
