import {Button, Spinner, Form, Container, Card} from "react-bootstrap";
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
                            <label htmlFor="name">Name</label>
                            <Form.Control
                                id="name"
                                type="text"
                                placeholder="the name of the brand"
                                name="name"
                                className={errors.some(error => error.param === "name") && 'is-invalid'}
                                onChange={handlerOnChangeInput}
                                value={data.name}/>
                            {errors.some(error => error.param === "name") &&
                                <Form.Text className="text-danger">
                                    {errors.find(error => error.param === "name").msg}
                                </Form.Text>
                            }
                        </Form.Group>
                        <br/>
                        <Form.Group>
                            <label htmlFor="category">Category</label> <Form.Select
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
                        </Form.Group>
<br/>
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