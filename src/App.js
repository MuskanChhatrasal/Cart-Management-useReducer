import { useReducer } from "react";
import "./styles.css";

const itemsInCart = [
  {
    id: 1,
    name: "kala chasma",
    price: 1000,
    count: 0
  },
  {
    id: 2,
    name: "laal chhadi",
    price: 500,
    count: 0
  },
  {
    id: 3,
    name: "jalebi",
    price: 50,
    count: 0
  },
  {
    id: 4,
    name: "japani joota",
    price: 10000,
    count: 0
  }
];
// const filterItems = (items, id) => items.filter((it)=>{
//   return it.id === id
// })

const reducer = (state, action) => {
  // const updateList = () =>{
  //   let updatedList;
  //       if(filterItems(state.cartItems, action.payload.id).length>0){
  //         updatedList = state.cartItems.map((it)=>{
  //           if(it.id === action.payload.id){
  //             return {...it, count: state.it.count + 1}
  //           }
  //           else{
  //             return it;
  //           }
  //         })
  //       }
  //       let item = filterItems(state.itemsInCart, action.payload.id)[0];
  //       updatedList = [...state.cartItems, item]
  //     }
  // }
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.name]
        // items: (state.items = state.items + 1),
        // totalPrice: (state.totalPrice = state.totalPrice + action.payload.price)
      };
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, action.payload.name] };
    // case "REMOVE":
    //   return {
    //     ...state
    //     // cartItems: state.cartItems.filter((it) => it.id !== action.payload.id),
    //     // wishlist: state.wishlist.filter((it) => it.id !== action.payload.id)
    //   };
    default:
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    items: 0,
    totalPrice: 0,
    cartItems: [],
    wishlist: []
  });
  return (
    <div className="App">
      <h1>Cart Management</h1>
      <h2>Items: {state.items}</h2>
      <h2>Total Price: {state.totalPrice}</h2>
      {itemsInCart.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <button
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
            >
              Add to Cart
            </button>
            <button
              style={{ marginLeft: "0.5rem" }}
              onClick={() =>
                dispatch({ type: "ADD_TO_WISHLIST", payload: item })
              }
            >
              Move to wishlist
            </button>
            <hr />
          </div>
        );
      })}
      {state.cartItems.length > 0 && <h1>My Cart</h1>}
      {state.cartItems.map((it) => {
        return (
          <div key={it}>
            <h3>{it}</h3>
            <button>Remove</button>
            <button
              style={{ marginLeft: "0.5rem" }}
              onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: it })}
            >
              Move to wishlist
            </button>
            <hr />
          </div>
        );
      })}
      {state.wishlist.length > 0 && <h1>My Wishlist</h1>}
      {state.wishlist.map((it) => {
        return (
          <div key={it}>
            <h2>{it}</h2>
            <button>Remove</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
