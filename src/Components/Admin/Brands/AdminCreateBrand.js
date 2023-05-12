import {Button, Col, Row} from "react-bootstrap";
import avatar from '../../../assets/images/avatar.png'
import React from "react";

const AdminCreateBrand = () => {
    return (<>
        <Row className="justify-content-start">
            <div className="admin-content-text pb-4">Create new brand</div>
            <Col sm={8}>
                <div className="text-form pb-2">the image od the brand</div>
                <img src={avatar} width="120px" height="100px" alt="avatar"/>
                <input className="input-form d-block mt-3 px-3"
                       type="text" placeholder="the name of the brand"
                />
            </Col>
        </Row>
        <Row>
            <Col sm={8} className="d-flex justify-content-end">
                <Button variant="outline-primary" className="d-inline mt-2">Submit the updates</Button>
            </Col>
        </Row>
    </>)
}
export default AdminCreateBrand