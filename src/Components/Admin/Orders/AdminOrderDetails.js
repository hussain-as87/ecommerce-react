import React from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { GetOrderDetailsAndStatus } from "../../../Controllers/OrderController";
import { StarFill } from "react-bootstrap-icons";
import imageFail from "../../../assets/images/image.png"

const AdminOrderDetails = () => {
    const { id } = useParams();
    const {
        order,
        isCheckedP,
        isCheckedD,
        handleUpdateToPaid,
        handleUpdateToDeliver,
    } = GetOrderDetailsAndStatus(id);

    return (
        <Container>
            <div className="admin-content-text">Order <b className="text-primary">{id}</b></div>
            <Row className="justify-content-center mt-4">
                <Col xs="12">
                    <Card className="mb-4">
                        <Card.Header>User Details</Card.Header>
                        <Card.Body>
                            <div className="user-detail">
                                <span className="user-detail-label text-primary">Customer Name: </span>
                                <span className="user-detail-value">{order?.data?.user.name}</span>
                            </div>
                            <div className="user-detail">
                                <span className="user-detail-label text-primary">Customer Email: </span>
                                <span className="user-detail-value">{order?.data?.user.email}</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="12">
                    <Card>
                        <Card.Body>
                            <div className="total-price">Total price: {order?.data?.totalOrderPrice} $</div>
                            <div className="form-group">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox"
                                           className="custom-control-input"
                                           name="isPaid"
                                           id="custom-switch"
                                           onChange={handleUpdateToPaid}
                                           checked={isCheckedP}
                                           disabled={isCheckedP}/>
                                    <label className="custom-control-label" htmlFor="customSwitch1">Is Paid</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox"
                                           className="custom-control-input"
                                           name="isDelivered"
                                           id="custom-switch"
                                           onChange={handleUpdateToDeliver}
                                           checked={isCheckedD}
                                           disabled={isCheckedD}/>
                                    <label className="custom-control-label" htmlFor="customSwitch1">Is Delivered</label>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
                {order?.data?.cartItems?.map((item, index) => (
                    <Col key={index} xs="12" md="6" lg="4">
                        <Card className="mb-4">
                            <Row className="d-flex">
                                <Col xs="6">
                                    <Card.Body>
                                        <Card.Title className="cart-item-title">
                                            {item?.product?.title}
                                        </Card.Title>
                                        <div className="cart-item-rating">
                                            {item?.product?.ratingsAverage}{" "}
                                            <StarFill size={17} className="text-warning" />
                                            <span className="rate-count">
                        ({item?.product?.ratingQuantity} ratings)
                      </span>
                                        </div>
                                        <div className="cart-item-quantity">
                                            Quantity: {item?.quantity}
                                        </div>
                                    </Card.Body>
                                </Col>
                                <Col xs="6" className="d-flex justify-content-end">
                                    <Card.Img onError={(e) => (e.target.src = imageFail)}
                                        src={item?.product?.imageCover}
                                        alt=""
                                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AdminOrderDetails;
