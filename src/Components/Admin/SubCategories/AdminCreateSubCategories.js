import {Button, Col, Row, Spinner, Form, FloatingLabel, Container, Card} from "react-bootstrap";
import React from "react";
import {Check2Circle} from "react-bootstrap-icons";
import {CreateSubcategory} from "../../../Controllers/SubcategoryController";

const AdminCreateSubCategories = () => {
    const {
        data,
        handlerOnChangeInput,
        handleSubmit,
        isPress,
        categories,
        errors
    } = CreateSubcategory()
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title className="">Create Subcategory</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <FloatingLabel controlId="name" label="Name">
                                <Form.Control
                                    id="name"
                                    className={errors.some(error => error.param === "name") && 'is-invalid'}
                                    name="name"
                                    value={data.name}
                                    onChange={handlerOnChangeInput}
                                    type="text" placeholder="the name of the subcategory"
                                />
                                {errors.some(error => error.param === "name") &&
                                    <Form.Text className="text-danger">
                                        {errors.find(error => error.param === "name").msg}
                                    </Form.Text>}
                            </FloatingLabel>
                        </Form.Group>
                        <br/>
                        <Form.Group>
                            <FloatingLabel controlId="category" label="Category">
                                <Form.Select
                                    id="category"
                                    name="category"
                                    value={data.category}
                                    onChange={handlerOnChangeInput}
                                    className={errors.some(error => error.param === "category") && 'is-invalid'}
                                >
                                    <option value="val">Choose category</option>
                                    {categories?.data?.map((cate) => (
                                        <option value={cate._id} key={cate._id}>
                                            {cate.name}
                                        </option>
                                    ))}
                                </Form.Select>
                                {errors.some(error => error.param === "category") &&
                                    <Form.Text className="text-danger">
                                        {errors.find(error => error.param === "category").msg}
                                    </Form.Text>}
                            </FloatingLabel>
                        </Form.Group>

                        <Button
                            type="submit"
                            variant="outline-primary"
                            className="mt-2 justify-content-end d-flex"
                        >
                            <Check2Circle size={20}/>
                            {isPress && (<Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />)}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>)
}
export default AdminCreateSubCategories