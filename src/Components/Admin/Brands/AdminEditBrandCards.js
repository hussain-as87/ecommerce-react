import React from "react";
import {Backspace, Check2Circle, Pen, StarFill, Trash2} from "react-bootstrap-icons";
import {Button, Card, Form, Modal, Spinner} from "react-bootstrap";
import { EditBrand} from "../../../Controllers/BrandController";

const AdminEditBrand = ({id}) => {
    const {
        handleSubmit,
        isPress,
        name,
        img,
        onChangeImage,
        onChangeName,
        errors,
        showModal,
        setShowModal
    } = EditBrand(id);
    return (<>
            <Pen size={20} className="text-warning" onClick={() => setShowModal(true)}/>

            {showModal && (
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Card className="">
                        <Card.Body>
                            <Card.Title className="">Edit Brand</Card.Title>
                            <div className="text-form pb-2">The image of the brand</div>
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
                                <input
                                    type="file"
                                    name="image"
                                    onChange={onChangeImage}
                                    id="upload-image"
                                    className={
                                        errors.some((error) => error.param === "image") &&
                                        "is-invalid"
                                    }
                                />

                                {errors.some(error => error.param === "image") &&
                                    <Form.Text className="text-danger">
                                        {errors.find(error => error.param === "image").msg}
                                    </Form.Text>
                                }
                            </div>
                            <br/>
                            <Form.Group>
                                <label htmlFor="name">Name</label>
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
        </>
    )
}
export default AdminEditBrand
