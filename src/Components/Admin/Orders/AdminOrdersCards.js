import React from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Cash, Check2Circle, CreditCard, DashCircle, Truck, XLg} from "react-bootstrap-icons";
import {DestroyOrder} from "../../../Controllers/OrderController";

const AdminOrdersCards = ({item}) => {
    const {deleteHandler} = DestroyOrder(item._id)
    return (
        <Card className="col-12 mt-2 d-flex">
            <XLg className="m-3 text-danger" onClick={deleteHandler}></XLg>
            <Link to={`/admin/orders/${item._id}`}
                  className="cart-item-body-admin my-2 px-1 d-flex px-2"
                  style={{textDecoration: "none"}}>
                <Card.Body>
                    <Card.Title>Order: <b className="text-primary">{item._id}</b></Card.Title>
                    <Card.Text>
                        <Row className="justify-content-between">
                            <Col sm="12" className=" d-flex flex-row justify-content-between">
                                <div className="d-inline pt-2 cat-text">
                                    <b className="me-3">{item?.cartItems?.length} item</b>
                                    {item?.cartItems?.map((i) => (
                                            <Card.Img className="me-3" style={{width: '40px'}} src={i?.product?.imageCover}></Card.Img>

                                    ))}
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-2">
                            <Col sm="12" className=" d-flex flex-row justify-content-start">
                                <div className="d-inline pt-2 cat-title">
                                    ordered by: {item?.user?.name || ''}
                                </div>
                                <div style={{color: 'black'}}
                                     className="d-inline pt-2 cat-rate me-2 text-warning"> :( {item.user.email || ''} )
                                </div>
                            </Col>
                        </Row>

                        <Row className="d-flex justify-content-between">
                            <Col xs="12" className="d-flex">
                                <div>
                                    <div style={{color: 'black'}} className="d-inline"> Deliver</div>
                                    <div
                                        className={`d-inline mx-2 stat ${item?.isDelivered === true?'text-success':'text-danger'}`}>{item?.isDelivered === true ? (<><Truck size={25} className="text-success"/> Delivered</>)  : (<><DashCircle size={25} className="text-danger"/> Isn't Delivered yet!</>)}</div>
                                </div>
                                <div>
                                    <div style={{color: 'black'}} className="d-inline"> Payment</div>
                                    <div
                                        className={`d-inline mx-2 stat ${item?.isPaid === true?'text-success':'text-danger'}`}>{item?.isPaid === true ? (<><Check2Circle size={25} className="text-success"/> Paid</>)  : (<><DashCircle size={25} className="text-danger"/> Isn't Paid</>)}</div>
                                </div>

                                <div>
                                    <div style={{color: 'black'}} className="d-inline">Payment Methods</div>
                                    <div
                                        className="d-inline mx-2 stat">{item?.paymentMethodType === 'cash' ? (<><Cash size={25} className="text-success"/> Cash</>) : (<><CreditCard size={25} className="text-primary"/> Credit</>)}</div>
                                </div>
                            </Col>
                            <Col xs="12" className="d-flex justify-content-end">
                                <div>
                                    <div className="barnd-text">{item?.totalOrderPrice || 0} $</div>
                                </div>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Link>
        </Card>
    )
}
export default AdminOrdersCards
