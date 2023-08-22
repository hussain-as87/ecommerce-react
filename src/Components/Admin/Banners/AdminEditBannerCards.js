import React from "react";
import {Backspace, Check2Circle, Pen} from "react-bootstrap-icons";
import {Button, Card, FloatingLabel, Form, Modal, Spinner} from "react-bootstrap";
import {EditBanner} from "../../../Controllers/BannerController";

const AdminEditBanner = ({id}) => {
    const {
        handleSubmit,
        isPress,
        data,
        img,
        onChangeImage,
        handleInputChange,
        errors,
        showModal,
        setShowModal
    } = EditBanner(id);
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
                            <Card.Title className="">Edit Banner</Card.Title>
                            <Form onSubmit={handleSubmit}>
                                <div className="text-form pb-2">the image od the banner</div>
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
                                    <FloatingLabel controlId="title" label="Title">
                                        <Form.Control
                                            id="title"
                                            type="text"
                                            placeholder="the title of the banner"
                                            name="title"
                                            className={errors.some(error => error.param === "title") && 'is-invalid'}
                                            onChange={handleInputChange}
                                            value={data.title}/>
                                        {errors.some(error => error.param === "title") &&
                                            <Form.Text className="text-danger">
                                                {errors.find(error => error.param === "title").msg}
                                            </Form.Text>
                                        }
                                    </FloatingLabel>
                                </Form.Group>
                                <br/>
                                <Form.Group>
                                    <FloatingLabel controlId="subtitle" label="Subtitle">
                                        <Form.Control
                                            id="subtitle"
                                            type="text"
                                            placeholder="the subtitle of the banner"
                                            name="subtitle"
                                            className={errors.some(error => error.param === "subtitle") && 'is-invalid'}
                                            onChange={handleInputChange}
                                            value={data.subtitle}/>
                                        {errors.some(error => error.param === "subtitle") &&
                                            <Form.Text className="text-danger">
                                                {errors.find(error => error.param === "subtitle").msg}
                                            </Form.Text>
                                        }
                                    </FloatingLabel>
                                </Form.Group>
                                <br/>
                                <Form.Group>
                                    <FloatingLabel controlId="summary" label="Summary">
                                        <Form.Control
                                            id="summary"
                                            type="text"
                                            placeholder="the summary of the banner"
                                            name="summary"
                                            className={errors.some(error => error.param === "summary") && 'is-invalid'}
                                            onChange={handleInputChange}
                                            value={data.summary}/>
                                        {errors.some(error => error.param === "summary") &&
                                            <Form.Text className="text-danger">
                                                {errors.find(error => error.param === "summary").msg}
                                            </Form.Text>
                                        }
                                    </FloatingLabel>
                                </Form.Group>
                                <br/>
                                <Form.Group>
                                    <FloatingLabel controlId="description" label="Description">
                                        <Form.Control
                                            id="description"
                                            type="text"
                                            placeholder="the description of the banner"
                                            name="description"
                                            className={errors.some(error => error.param === "description") && 'is-invalid'}
                                            onChange={handleInputChange}
                                            value={data.description}/>
                                        {errors.some(error => error.param === "description") &&
                                            <Form.Text className="text-danger">
                                                {errors.find(error => error.param === "description").msg}
                                            </Form.Text>
                                        }
                                    </FloatingLabel>
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
export default AdminEditBanner
