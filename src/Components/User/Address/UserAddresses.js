import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserAddressCard from './UserAddressCard'

const UserAddresses = () => {
    return (
        <div>
            <div className="admin-content-text pb-4">Address book</div>
            <UserAddressCard />
            <UserAddressCard />
            <UserAddressCard />

            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/address/create" style={{ textDecoration: "none" }}>
                        <Button variant="outline-primary" className="btn-add-address">Submit</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default UserAddresses
