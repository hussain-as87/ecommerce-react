import React from "react";
import {Button, Spinner, Form, FloatingLabel, Container, Card} from "react-bootstrap";
import {Check2Circle} from "react-bootstrap-icons";
import {CreateCategory} from "../../../Controllers/CategoryController";
import imageFail from "../../../assets/images/image.png"
const AdminCreateCategory = () => {
    const {name, onChangeName, img, handleSubmit, isPress, onChangeImage, errors} = CreateCategory();

    return (
        <>
            <Card className="">
                <Card.Body>
                    <Card.Title className="">Create Category</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <div className="text-form pb-2">The image of the category</div>
                        <div>
                            <label htmlFor="upload-image">
                                <img
                                    onError={(e) => e.target.src = imageFail}
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
                        <br/>
                        <Button
                            type="submit"
                            variant="outline-primary"
                            className="mt-2 justify-content-end d-flex"
                        >
                            <Check2Circle size={24}/>
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
        </>);
};

export default AdminCreateCategory;
