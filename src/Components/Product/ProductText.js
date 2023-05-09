import React from 'react'
import { Row,Col } from 'react-bootstrap'

const ProductText = () => {
    return (
        <div>
      <Row className="mt-2">
        <div className="cat-text">electronics :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            iPhone XR with 128GB memory and supports 4G LTE technology with VIS application <div className="cat-rate d-inline mx-3">4.5</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">brand :</div>
          <div className="barnd-text d-inline mx-1">samsung </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "#E52C2C" }}></div>
          <div
            className="color ms-2 border "
            style={{ backgroundColor: "white" }}></div>
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "black" }}></div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">feature :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">Your iPhone and login to apps, accounts, etc easily,
            The fastest and safest face ID feature is for authentication by fingerprint
            The face features an A12 bionic chip which is the smartest and strongest chip in phones
            The world's most famous cameras have formed a new era of photography
            Photography where the innovative sensor operates with ISP and engine
            Nervous, enabling you to take never-before-seen images of a single lens camera
            Put people on the front in a precise focus to reverse the scope
            Background Unclear Overview</div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">34000 pounds</div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">add to cart</div>
        </Col>
      </Row>
    </div>
    )
}

export default ProductText
