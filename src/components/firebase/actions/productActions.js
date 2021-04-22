import * as actionTypes from "./actionTypes";

export const createProduct = (product) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("products")
      .add({
        ...product,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: actionTypes.CREATE_PRODUCT, product });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.CREATE_PRODUCT_ERROR, err });
      });
  };
};

export const removeProduct = (productId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("products")
      .doc(productId)
      .delete()
      .then(() => {
        dispatch({ type: actionTypes.REMOVE_PRODUCT_SUCCESS, productId });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.REMOVE_PRODUCT_ERROR, err });
      });
  };
};

export const searchProducts = (products, search) => {
  return {
    type: actionTypes.SEARCH_PRODUCTS,
    payload: {
      products: products,
      searchQuery: search,
    },
  };
};
