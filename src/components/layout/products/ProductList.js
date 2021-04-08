import React from "react";

import ProductCard from "./ProductCard";

const ProductList = ({ products, auth, history }) => {
  return (
    <>
      {products !== undefined && products.length ? (
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
        })
      ) : (
        <div className="text-center">
          <i className="fas fa-search fa-10x py-5 not-found"></i>
          <h3 className="not-found">No products found.</h3>
        </div>
      )}
    </>
  );
};

export default ProductList;
