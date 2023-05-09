import React from 'react'
import { Row, Col } from 'react-bootstrap'
import rate from '../../assets/images/rate.png'
const RateItem = () => {
    return (
        <div>
            <Row className="mt-3">
                <Col className="d-felx me-5">
                    <div className="rate-name  d-inline ms-2">John Badrasa </div>
                    <img className="" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-felx me-4 pb-2">
                    <div className="rate-description  d-inline ms-2">Suitable Product Price For Current Face Coke Very And Shield Increase</div>
                </Col>
            </Row>
        </div>
    )
}

export default RateItem
