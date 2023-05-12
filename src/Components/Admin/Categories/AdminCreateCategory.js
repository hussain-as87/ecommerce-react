import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import avatar from "../../../assets/images/avatar.png"

const AdminCreateCategory = () => {
    return (
        <>
            <Row className="justify-content-start">
                <div className="admin-content-text pb-4">Create new Category</div>
                <Col sm={8}>
                    <div className="text-form pb-2">The image of the category</div>
                    <img src={avatar} width="120px" height="100px" alt="avatar"/>
                    <input type="text" className="input-form d-block mt-3 px-3" placeholder="the name pf the category"/>
                </Col>
            </Row>
            <Row>
                <Col sm={8} className="d-flex justify-content-end">
                    <Button variant="outline-primary" className="d-inline mt-2">Submit the updates</Button>
                </Col>
            </Row>
        </>
    )
}
export default AdminCreateCategory