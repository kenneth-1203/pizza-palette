import * as actionTypes from "./actionTypes";

export const addToCart = (productID, products, userID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    products: products,
    payload: {
      id: productID,
      uid: userID
    },
  };
};

export const removeFromCart = (productID, userID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: productID,
      uid: userID
    },
  };
};

export const adjustQuantity = (productID, value, adjustType, userID) => {
  return {
    type: actionTypes.ADJUST_QUANTITY,
    payload: {
      id: productID,
      quantity: value,
      adjustType: adjustType,
      uid: userID
    },
  };
};

export const clearCart = (userID) => {
  return {
    type: actionTypes.CLEAR_CART,
    payload: {
      uid: userID
    }
  }
}

export const setCount = (count) => {
  return {
    type: actionTypes.SET_COUNT,
    payload: {
      count: count
    }
  }
}

export const setCheckoutData = (total, delivery, items) => {
  return {
    type: actionTypes.SET_CHECKOUT_DATA,
    payload: {
      total,
      delivery,
      items,
    }
  }
}