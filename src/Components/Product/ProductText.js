import React from 'react'
import { Row,Col } from 'react-bootstrap'
import {StarFill} from "react-bootstrap-icons";

const ProductText = ({product}) => {
    return (
        <div>
      <Row className="mt-2">
        <div className="cat-text">electronics :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {product.title} <div className="cat-rate d-inline mx-3"><StarFill className="text-warning"/>{product?.ratingsAverage}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">brand :</div>
          <div className="barnd-text d-inline mx-1">{product?.brand?.name} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {product?.colors?.map((col)=>(
              <div
                  className="color ms-2 border"
                  style={{ backgroundColor: col }}></div>
          ))}
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">feature :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">{product.description}</div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12" className="py-2">
          <div className="product-price d-inline px-3 py-3 border bg-info">{product.price} $</div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">Add to cart</div>
        </Col>
      </Row>
    </div>
    )
}

export default ProductText
