export const createProduct = (product) => {
  return (dispatch, getState, { getFirebase, getFIrestore }) => {
    const firestore = getFIrestore();
    firestore
      .collection("products")
      .add({
        ...product,
        name: "Pasta",
        description: "Delicious pasta!",
        price: 16.99,
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", product });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
