import React from 'react'
import { Row } from 'react-bootstrap'
import UserOrderItem from "./UserOrderItem";

const UserOrders = () => {
    return (
        <div>
        <div className="admin-content-text pb-4">Welcome <b className="text-primary">Hussain</b></div>
        <Row className='justify-content-between'>
           <UserOrderItem />
           <UserOrderItem />
           <UserOrderItem />
        </Row>
        </div>
    )
}

export default UserOrders
