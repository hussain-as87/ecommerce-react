import {Button, Col, Row, Spinner, Form, FloatingLabel} from "react-bootstrap";
import React from "react";
import CreateBrandForm from "../../../Controllers/Brand/Admin/CreateBrandForm";

const AdminCreateBrand = () => {
    const {name, onChangeName, img, handleSubmit, isPress, onChangeImage, errors} = CreateBrandForm();
    return (<Form onSubmit={handleSubmit}>
        <Row className="justify-content-start">
            <div className="admin-content-text pb-4">Create new brand</div>
            <Col sm={8}>
                <div className="text-form pb-2">the image od the brand</div>
                <div>
                    <label htmlFor="upload-image">
                        <img
                            src={img}
                            alt="asa"
                            height={100}
                            width={120}
                            style={{cursor: "pointer"}}
                        />
                    </label>
                    <input type="file" name="image" onChange={onChangeImage} id="upload-image"
                           className={errors.some(error => error.param === "image") && 'is-invalid'}
                    />
                    {errors.some(error => error.param === "image") &&
                        <Form.Text className="text-danger">
                            {errors.find(error => error.param === "image").msg}
                        </Form.Text>
                    }
                </div>
                <br/>
                <Form.Group>
                    <FloatingLabel controlId="name" label="Name">
                        <Form.Control
                            id="name"
                            type="text"
                            placeholder="the name of the brand"
                            name="name"
                            className={errors.some(error => error.param === "name") && 'is-invalid'}
                            onChange={onChangeName}
                            value={name}/>
                        {errors.some(error => error.param === "name") &&
                            <Form.Text className="text-danger">
                                {errors.find(error => error.param === "name").msg}
                            </Form.Text>
                        }
                    </FloatingLabel>
                </Form.Group>

            </Col>
        </Row>
        <Row>
            <Col sm={8} className="d-flex justify-content-end">
                <Button
                    type="submit"
                    variant="outline-primary"
                    className="d-inline mt-2"
                >
                    Submit
                    {isPress && (<Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />)}
                </Button>
            </Col>
        </Row>
    </Form>)
}
export default AdminCreateBrand