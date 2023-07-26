import React from "react";
import {Col, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import {Outlet} from "react-router-dom";

const AdminLayout = ({ children }) => {
    return (
        <Row className='py-3'>
            <Col sm="4" xs="3" md="3">
                <AdminSideBar/>
            </Col>

            <Col sm="8" xs="9" md="9">
                {children}
                <Outlet />
            </Col>
        </Row>
    );
};

export default AdminLayout;
