import React from "react";
import { Link } from "react-router-dom";

import ProductSummary from "./ProductSummary";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      {products &&
        products.map((product) => {
          return (
            <Link to={`/product/${product.id}`}>
              <ProductSummary product={product} key={product.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProductList;