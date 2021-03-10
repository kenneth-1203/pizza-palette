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
      })
      .then(() => {
        dispatch({ type: "CREATE_PRODUCT", product });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PRODUCT_ERROR", err });
      });
  };
};
