import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {StarFill} from "react-bootstrap-icons";
const UserOrderCard = ({item}) => {
    return (
        <div>
            <Row className="d-flex mb-2">
                <Col xs="3" md="2" className="d-flex justify-content-start">
                    <img width="93px" height="120px" src={item.product.imageCover} alt="" />
                </Col>
                <Col xs="8" md="6">
                    <div className="d-inline pt-2 cat-title">{item.product.title}</div><br/>
                    <div className="d-inline pt-2 cat-rate me-2">{item.product.ratingsAverage} <StarFill size={17} className="text-warning"/> </div>
                    <div className="rate-count d-inline p-1 pt-2">({item.product.ratingQuantity} ratings)</div>
                    <div className="mt-3">
                        <div className="cat-text  d-inline">quantity: {item.quantity}</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserOrderCard
