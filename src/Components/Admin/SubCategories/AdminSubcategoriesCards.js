import React from "react";
import imageFail from "../../../assets/images/image.png"
import {Backspace, Check2Circle, Pen, StarFill, Trash2} from "react-bootstrap-icons";
import {Button, Card, FloatingLabel, Form, Modal, Spinner} from "react-bootstrap";
import {DestroyCategory, EditCategory} from "../../../Controllers/CategoryController";
import {DestroyBrand, EditBrand} from "../../../Controllers/BrandController";
import {DestroySubcategory, EditSubcategory} from "../../../Controllers/SubcategoryController";

const AdminSubcategoriesCards = ({subcategory}) => {
    const {deleteHandler} = DestroySubcategory(subcategory?._id)
    const {
        data,
        handlerOnChangeInput,
        handleSubmit,
        isPress,
        categories,
        errors,
        showModal,
        setShowModal
    } = EditSubcategory(subcategory?._id);
    return (
        <tr>
            <th>{subcategory?._id}</th>
            <th>{subcategory?.name}</th>
            <th>{subcategory?.category?.name}</th>
            <th>{/*<Link to={`/admin/products/edit/${_id}`}>*/}
                <Pen size={20} className="text-warning" onClick={() => setShowModal(true)}/>
                {/*</Link>*/}
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
            </th>
            <th>
                <Trash2 size={20} className="text-danger" onClick={deleteHandler}/>
            </th>
        </tr>
    )
}
export default AdminSubcategoriesCards