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
  switch (action.type) {
    case "CREATE_PRODUCT":
      console.log("Product added to menu.", action.product);
      return state;
    case "CREATE_PRODUCT_ERROR":
      console.log("Create product error!", action.err);
      return state;
    default: 
      return state;
  }
};

export default productReducer;
