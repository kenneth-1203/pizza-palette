import * as actionTypes from "../actions/actionTypes";

const initState = {
  products: [
    {
      id: "1",
      name: "Pizza",
      description: "Delicious pizza!",
      price: "RM 15.99",
    },
    {
      id: "2",
      name: "Pasta",
      description: "Delicious pasta!",
      price: "RM 16.99",
    },
    {
      id: "3",
      name: "Chocolate Cake",
      description: "Delicious cake!",
      price: "RM 13.99",
    },
  ],
  cart: [], // {id, name, description, price, image, quantity}
};

const shopReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const product = action.products.find(
        (product) => product.id === action.payload.id
      );
      const inCart = state.cart.find((product) =>
        product.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((product) =>
              product.id === action.payload.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            )
          : [...state.cart, { ...product, quantity: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                quantity: action.payload.adjType
                  ? action.payload.quantity++
                  : action.payload.quantity--,
              }
            : product
        ),
      };
    default:
      return state;
  }
};

export default shopReducer;
