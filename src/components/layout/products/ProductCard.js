import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt="productImage" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <a href="." className="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
