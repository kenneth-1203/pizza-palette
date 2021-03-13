import React from "react";
import { Link } from "react-router-dom";

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
