import {Col, Container, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import Pagination from "../../Components/Utility/Pagination";
import AdminOrdersContainer from "../../Components/Admin/Orders/AdminOrdersContainer";
import {GetOrders} from "../../Controllers/OrderController";
import React from "react";

const AdminOrdersPage = () => {
    const {orders, pageCount, getPage} = GetOrders()

    return (
            <Row className='py-3'>
                <Col sm="4" xs="3" md="3">
                    <AdminSideBar/>
                </Col>

                <Col sm="8" xs="9" md="9">
                    <AdminOrdersContainer orders={orders.data}/>
                    {pageCount > 1 && (<Pagination pageCount={pageCount} onPress={getPage}/>)}            </Col>
            </Row>
    )
}
export default AdminOrdersPage