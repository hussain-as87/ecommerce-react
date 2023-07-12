import React from "react";
import { useParams } from "react-router-dom";
import {Card, Col, Form, Row} from "react-bootstrap";

import {
    GetOrder,
    UpdateToDeliveredOrder,
    UpdateToPaidOrder,
} from "../../../Controllers/OrderController";
import {StarFill} from "react-bootstrap-icons";

const AdminOrderDetails = () => {
    const { id } = useParams();
    const { order } = GetOrder(id);
    const { handleUpdateToPaid, isCheckedP } = UpdateToPaidOrder(id);
    const { handleUpdateToDeliver, isCheckedD } = UpdateToDeliveredOrder(id);

    return (
        <>
            <div className="admin-content-text">Order <b className="text-primary">{id}</b></div>
            <Row className="justify-content-center mt-4 user-data">
                <Col xs="12">
                    <h5 className="admin-content-text">User Details</h5>
                    <div className="user-detail">
                        <span className="user-detail-label">Name:</span>
                        <span className="user-detail-value">{order?.data?.user.name}</span>
                    </div>
                    <div className="user-detail">
                        <span className="user-detail-label">Email:</span>
                        <span className="user-detail-value">{order?.data?.user.email}</span>
                    </div>
                </Col>
                <Col xs="12">
                    <div className="total-price">Total price: {order?.data?.totalOrderPrice} $</div>
                </Col>
                <Col xs="12">
                    <div className="switch-container">
                        <Form.Check
                            name="isPaid"
                            type="switch"
                            id="custom-switch"
                            label="Is Paid"
                            onChange={handleUpdateToPaid}
                            checked={isCheckedP}
                        />
                        <Form.Check
                            name="isDelivered"
                            type="switch"
                            id="custom-switch"
                            label="Is Delivered"
                            onChange={handleUpdateToDeliver}
                            checked={isCheckedD}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                {order?.data?.cartItems?.map((item, index) => (
                    <Card key={index} className="mt-1">
                        <Row className="d-flex mb-2">
                            <Col xs="9" md="10">
                                <div className="cart-item-title">{item?.product?.title}</div>
                                <div className="cart-item-rating">
                                    {item?.product?.ratingsAverage} <StarFill size={17} className="text-warning" />
                                    <span className="rate-count">({item?.product?.ratingQuantity} ratings)</span>
                                </div>
                                <div className="cart-item-quantity">Quantity: {item?.quantity}</div>
                            </Col>
                            <Col xs="3" md="2" className="d-flex justify-content-end">
                                <img width="93px" height="120px" src={item?.product?.imageCover} alt="" />
                            </Col>
                        </Row>
                    </Card>
                ))}
            </Row>


        </>
    );
};

export default AdminOrderDetails;
