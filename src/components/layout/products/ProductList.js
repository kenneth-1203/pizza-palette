import React from "react";

import ProductCard from "./ProductCard";

const ProductList = ({ products, auth, history }) => {
  console.log(products)
  return (
    <React.Fragment>
      {products !== undefined &&
        products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              products={products}
              auth={auth}
              history={history}
            />
          );
        })}
    </React.Fragment>
  );
};

export default ProductList;
