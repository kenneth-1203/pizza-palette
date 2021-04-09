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
  let cart;
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      cart = JSON.parse(window.sessionStorage.getItem(action.payload.uid))
        ? JSON.parse(window.sessionStorage.getItem(action.payload.uid))
        : [];
      const product = action.products.find(
        (product) => product.id === action.payload.id
      );
      const inCart = cart
        ? cart.find((product) =>
            product.id === action.payload.id ? true : false
          )
        : false;
      const item = inCart
        ? cart.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        : [...cart, { ...product, quantity: 1 }];
      window.sessionStorage.setItem(action.payload.uid, JSON.stringify(item));
      return {
        ...state,
        cart: item,
      };
    case actionTypes.REMOVE_FROM_CART:
      cart = JSON.parse(window.sessionStorage.getItem(action.payload.uid))
        ? JSON.parse(window.sessionStorage.getItem(action.payload.uid))
        : [];
      let newCart = cart.filter((product) => product.id !== action.payload.id);
      window.sessionStorage.setItem(
        action.payload.uid,
        JSON.stringify(newCart)
      );
      return {
        ...state,
        cart: newCart,
      };
    case actionTypes.ADJUST_QUANTITY:
      cart = JSON.parse(window.sessionStorage.getItem(action.payload.uid))
        ? JSON.parse(window.sessionStorage.getItem(action.payload.uid))
        : [];
      let adjustedCart = cart.map((product) =>
        product.id === action.payload.id
          ? {
              ...product,
              quantity: action.payload.adjType
                ? action.payload.quantity++
                : action.payload.quantity--,
            }
          : product
      );
      window.sessionStorage.setItem(
        action.payload.uid,
        JSON.stringify(adjustedCart)
      );
      return {
        ...state,
        cart: adjustedCart,
      };
    case actionTypes.CLEAR_CART:
      window.sessionStorage.removeItem(action.payload.uid);
      return {
        ...state,
        cart: [],
      };
    case actionTypes.SET_COUNT:
      return {
        ...state,
        count: action.payload.count,
      };
    case actionTypes.SET_CHECKOUT_DATA:
      return {
        ...state,
        checkout: {
          total: action.payload.total,
          delivery: action.payload.delivery,
          items: action.payload.items,
        },
      };
    default:
      return state;
  }
};

export default shopReducer;
