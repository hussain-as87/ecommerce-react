import React from "react";
import {Button, Col, Row, Spinner, Form} from "react-bootstrap";
import CreateCategoryForm from "../../../Controllers/Category/Admin/CreateCategoryForm";

const AdminCreateCategory = () => {
    const {name, onChangeName, img, handleSubmit, isPress, onChangeImage, errors} = CreateCategoryForm();

    return (<>
        <Row className="justify-content-start">
            <div className="admin-content-text pb-4">Create new Category</div>
            <Col sm={8}>
                <div className="text-form pb-2">The image of the category</div>
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
                    <Form.Control type="text"
                                  placeholder="the name of the category"
                                  name="name"
                                  className={errors.some(error => error.param === "name") && 'is-invalid'}
                                  onChange={onChangeName}
                                  value={name}/>
                    {errors.some(error => error.param === "name") &&
                        <Form.Text className="text-danger">
                            {errors.find(error => error.param === "name").msg}
                        </Form.Text>
                    }
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col sm={8} className="d-flex justify-content-end">
                <Button
                    onClick={handleSubmit}
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
    </>);
};

export default AdminCreateCategory;
