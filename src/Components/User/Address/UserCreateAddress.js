import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'

const UserCreateAddress = () => {
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-2">Create a new address</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="the address"
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="more details"
                    />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="phone number"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <Button variant="outline-primary" className="d-inline mt-2 ">Submit</Button>
                </Col>
            </Row>
        </div>
    )
}

export default UserCreateAddress
