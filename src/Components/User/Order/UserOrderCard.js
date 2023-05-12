import React from 'react'
import { Row, Col } from 'react-bootstrap'
import mobile from '../../../assets/images/mobile.png'
const UserOrderCard = () => {
    return (
        <div>
            <Row className="d-flex mb-2">
                <Col xs="3" md="2" className="d-flex justify-content-start">
                    <img width="93px" height="120px" src={mobile} alt="" />
                </Col>
                <Col xs="8" md="6">
                    <div className="d-inline pt-2 cat-title">iPhone XR with 128GB memory and supports 4G LTE technology with VIS application
                        Time (Prodict) Red</div>
                    <div className="d-inline pt-2 cat-rate me-2">4.5</div>
                    <div className="rate-count d-inline p-1 pt-2">(160 ratings)</div>
                    <div className="mt-3">
                        <div className="cat-text  d-inline">quantity</div>
                        <input
                            className="mx-2 "
                            type="number"
                            style={{ width: "40px", height: "25px" }}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserOrderCard
