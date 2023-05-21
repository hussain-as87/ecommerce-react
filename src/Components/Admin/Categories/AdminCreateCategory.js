import React from "react";
import {Button, Col, Row, Spinner} from "react-bootstrap";
import CreateCategoryForm from "../../../Controllers/Category/Admin/CreateCategoryForm";

const AdminCreateCategory = () => {
    const {name, onChangeName, img, handleSubmit, isPress, onChangeImage} = CreateCategoryForm();

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
                        <input type="file" name="image" onChange={onChangeImage} id="upload-image"/>
                    </div>
                    <input
                        onChange={onChangeName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="the name pf the category"
                        value={name}
                    />
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
