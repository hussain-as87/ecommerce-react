import React from 'react'
import { Row, Col } from 'react-bootstrap'
import UserOrderCard from './UserOrderCard'
const UserOrderItem = ({order}) => {
    return (
        <div className="user-order mt-2">
            <Row>
                <div className="py-2 order-title">order #{order._id}</div>
            </Row>
            {order.cartItems.map((item,index)=>(
                <UserOrderCard key={index} item={item}/>
            ))}
            <Row className="d-flex justify-content-between">
                <Col xs="6" className="">
                    <div>
                        <div className="d-inline">Status</div>
                        <div className="d-inline mx-2 stat">{order.isPaid===false?'Processing':'Done'}</div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">{order.totalOrderPrice} $</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserOrderItem
