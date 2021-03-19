import * as actionTypes from "./actionTypes";

export const addToCart = (productID, products) => {
  return {
    type: actionTypes.ADD_TO_CART,
    products: products,
    payload: {
      id: productID,
    },
  };
};

export const removeFromCart = (productID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: productID,
    },
  };
};

export const adjustQuantity = (productID, value, adjustType) => {
  return {
    type: actionTypes.ADJUST_QUANTITY,
    payload: {
      id: productID,
      quantity: value,
      adjustType: adjustType
    },
  };
};