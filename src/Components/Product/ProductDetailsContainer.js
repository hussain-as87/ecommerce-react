import React from "react";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

const ProductDetailsContainer = ({ product, loading }) => {
  if (!product || !product.data) {
    return <div>No product data available.</div>;
  }
  return (
      <section className="shop-details">
        <ProductGallery
          images={product.data.images}
          imageCover={product.data.imageCover}
      />
        <ProductText product={product.data} />
      </section>
  );
};

export default ProductDetailsContainer;
