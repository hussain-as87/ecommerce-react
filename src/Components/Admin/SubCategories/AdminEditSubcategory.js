import {Button, Col, Row, Spinner, Form, FloatingLabel, Container, Card, Modal} from "react-bootstrap";
import React from "react";
import {Backspace, Check2Circle, Pen} from "react-bootstrap-icons";
import {CreateSubcategory, EditSubcategory} from "../../../Controllers/SubcategoryController";

const AdminEditSubcategory = ({id}) => {
    const {
        data,
        handlerOnChangeInput,
        handleSubmit,
        isPress,
        categories,
        errors,
        showModal,
        setShowModal
    } = EditSubcategory(id);
    return (
        <>
            <Pen size={20} className="text-warning" onClick={() => setShowModal(true)}/>

            {showModal && (
                <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Subcategory</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card className="">
                            <Card.Body>
                                <Card.Title className="">Edit Subcategory</Card.Title>
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
                            </Card.Body>
                        </Card>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={() => setShowModal(false)}>
                            <Backspace/>
                        </Button>
                        <Button variant="outline-primary" type="submit" onClick={handleSubmit}>
                            <Check2Circle/>
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>)
}
export default AdminEditSubcategory