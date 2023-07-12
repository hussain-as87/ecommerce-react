import React from 'react'
import {Row, Spinner} from 'react-bootstrap'
import UserOrderItem from "./UserOrderItem";
import {GetOrders} from "../../../Controllers/OrderController";
import Pagination from "../../Utility/Pagination";

const UserOrders = () => {
    const {orders, getPage, pageCount, loading} = GetOrders()

    return (
        <div>
            <div className="admin-content-text pb-4">Welcome <b className="text-primary">Hussain</b></div>
            <Row className='justify-content-between'>
                {!loading ?
                    (orders?.data?.map((order) => (
                        <UserOrderItem order={order} key={order._id}/>
                    ))) : <div className="text-center mt-5"><Spinner style={{width: '100px', height: '100px'}}
                                                                     animation="border" variant="secondary"></Spinner>
                    </div>}
                {pageCount > 1 && (<Pagination pageCount={pageCount} onPress={getPage}/>)}
            </Row>
        </div>
    )
}

export default UserOrders
