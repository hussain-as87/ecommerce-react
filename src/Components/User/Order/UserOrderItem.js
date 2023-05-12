import React from 'react'
import { Row, Col } from 'react-bootstrap'
import UserOrderCard from './UserOrderCard'
const UserOrderItem = () => {
    return (
        <div className="user-order mt-2">
            <Row>
                <div className="py-2 order-title">order #234556</div>
            </Row>
            <UserOrderCard />
            <UserOrderCard />
            <Row className="d-flex justify-content-between">
                <Col xs="6" className="">
                    <div>
                        <div className="d-inline">Status</div>
                        <div className="d-inline mx-2 stat">Processing</div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">4000 pounds</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserOrderItem
