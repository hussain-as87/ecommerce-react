import {Button, Col, Row, Spinner, Form} from "react-bootstrap";
import React from "react";
import CreateSubcategoryForm from "../../../Controllers/Subcategory/Admin/CreateSubcategoryForm";

const AdminCreateSubCategories = () => {
    const {
        name,
        onChangeName,
        category,
        onChangeCategory,
        handleSubmit,
        isPress,
        categories,
        errors
    } = CreateSubcategoryForm()
    return (<>
        <Row className="justify-content-start">
            <div className="admin-content-text pb-4">Create new subcategory</div>
            <Col sm={8}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        className={errors.some(error => error.param === "name") && 'is-invalid'}
                        name="name"
                        value={name}
                        onChange={onChangeName}
                        type="text" placeholder="the name of the subcategory"
                    />
                    {errors.some(error => error.param === "name") &&
                        <Form.Text className="text-danger">
                            {errors.find(error => error.param === "name").msg}
                        </Form.Text>}
                </Form.Group>


                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                        id="category"
                        name="category"
                        value={category}
                        onChange={onChangeCategory}
                        className={errors.some(error => error.param === "category") && 'is-invalid'}
                    >
                        <option value="val">Choose category</option>
                        {categories &&
                            categories.data.map((cate) => (
                                <option value={cate._id} key={cate._id}>
                                    {cate.name}
                                </option>
                            ))}
                    </Form.Select>
                    {errors.some(error => error.param === "category") &&
                        <Form.Text className="text-danger">
                            {errors.find(error => error.param === "category").msg}
                        </Form.Text>}
                </Form.Group>

            </Col>
        </Row>
        <br/>
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
    </>)
}
export default AdminCreateSubCategories