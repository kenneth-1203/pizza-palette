import React from "react";

import ProductCard from "./ProductCard";

const ProductList = ({ products, auth, history }) => {
  return (
    <React.Fragment>
      {products &&
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
