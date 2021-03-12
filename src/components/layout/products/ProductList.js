import React from "react";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      {products &&
        products.map((product) => {
          return (
            <Link to={`/product/${product.id}`} key={product.id} >
              <ProductCard product={product} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProductList;
