import React from 'react'
import { Row, Col} from 'react-bootstrap'
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAddCoupon from "../../Components/Admin/Coupons/AdminAddCoupon";

const AdminCreateCouponPage = () => {
    return (
        <Row className='py-3'>
            <Col sm="4" xs="3" md="3">
                <AdminSideBar/>
            </Col>

            <Col sm="8" xs="9" md="9">
                <AdminAddCoupon/>
            </Col>
        </Row>
    )
}

export default AdminCreateCouponPage