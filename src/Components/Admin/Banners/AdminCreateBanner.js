import {Button, Spinner, Form, FloatingLabel, Card, Container} from "react-bootstrap";
import React from "react";
import {Check2Circle} from "react-bootstrap-icons";
import {CreateBanner} from "../../../Controllers/BannerController";

const AdminCreateBanner = () => {
    const {data, handleInputChange, img, handleSubmit, isPress, onChangeImage, errors} = CreateBanner();
    return (
        <Container>
            <Card className="">
                <Card.Body>
                    <Card.Title className="">Create Banner</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <div className="text-form pb-2">the image od the banner</div>
                        <div>
                            <label htmlFor="upload-image">
                                <img
                                    src={img}
                                    alt="asa"
                                    style={{height:'100px',width:'100%',cursor: "pointer"}}
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
                        <Form.Group>
                            <label htmlFor="title">Title</label>
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
                        </Form.Group>
                        <br/>
                        <Form.Group>
                            <label htmlFor="subtitle">Subtitle</label>
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
                        </Form.Group>
                        <br/>
                        <Form.Group>
                            <label htmlFor="summary">Summary</label>
                            <textarea id="summary"
                                      placeholder="the summary of the banner"
                                      name="summary"
                                      className={`form-control ${errors.some(error => error.param === "summary") && 'is-invalid'}`}
                                      onChange={handleInputChange}
                                      value={data.summary}
                                      rows="5"></textarea>
                            {errors.some(error => error.param === "summary") &&
                                <Form.Text className="text-danger">
                                    {errors.find(error => error.param === "summary").msg}
                                </Form.Text>
                            }

                        </Form.Group>
                        <br/>
                        <Form.Group>
                            <label htmlFor="description">Description</label>
                            <textarea id="description"
                                      placeholder="the description of the banner"
                                      name="description"
                                      className={`form-control ${errors.some(error => error.param === "description") && 'is-invalid'}`}
                                      onChange={handleInputChange}
                                      value={data.description}
                                      rows="5"></textarea>
                            {errors.some(error => error.param === "description") &&
                                <Form.Text className="text-danger">
                                    {errors.find(error => error.param === "description").msg}
                                </Form.Text>
                            }
                        </Form.Group>

                        <br/>

                        <Button
                            type="submit"
                            variant="outline-primary"
                            className="mt-2 justify-content-end d-flex"
                        >
                            <Check2Circle size={25}/>
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
        </Container>
    )
}
export default AdminCreateBanner