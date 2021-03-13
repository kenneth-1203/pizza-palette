import React from "react";

import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <React.Fragment>
      {products &&
        products.map(product => {
          return <ProductCard product={product} />;
        })}
    </React.Fragment>
  );
};

export default ProductList;
