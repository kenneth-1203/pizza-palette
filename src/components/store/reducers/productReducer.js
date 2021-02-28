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
};

const productReducer = (state = initState, action) => {
  return state;
};

export default productReducer;
