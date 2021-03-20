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
        image: product.image
      })
      .then(() => {
        dispatch({ type: actionTypes.CREATE_PRODUCT, product });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.CREATE_PRODUCT_ERROR, err });
      });
  };
};
