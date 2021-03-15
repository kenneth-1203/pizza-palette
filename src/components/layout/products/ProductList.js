import React from "react";

import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  console.log(products)
  return (
    <React.Fragment>
      {products &&
        products.map(product => {
          return <ProductCard key={product.id} product={product} products={products} />;
        })}
    </React.Fragment>
  );
};

export default ProductList;
