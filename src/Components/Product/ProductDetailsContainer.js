import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

const ProductDetailsContainer = ({ product, loading }) => {
  if (!product || !product.data) {
    return <div>No product data available.</div>;
  }
  return (
    <div>
      <Row className="py-3">
        <Col lg="5" md="12" xs="12" sm="12">
          <ProductGallery
            images={product.data.images}
            imageCover={product.data.imageCover}
          />
        </Col>
        <Col lg="7" md="12" xs="12" sm="12">
          <ProductText product={product.data} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailsContainer;
