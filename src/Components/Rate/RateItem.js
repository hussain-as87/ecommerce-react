import React, {useState} from 'react';
import {Row, Col, Button, Modal, Form, FloatingLabel} from 'react-bootstrap';
import {StarFill, Trash2, Pin, Pencil, Save, SdCardFill, XCircleFill} from "react-bootstrap-icons"
import ReactStars from "react-rating-stars-component";
import {DestroyReview, EditReview} from "../../Controllers/ReviewController";

const RateItem = ({review}) => {
    const {
        data, handlerOnChangeRating, handlerOnChangeInput, UpdateHandler, isPress, errors, showModal
        , setShowModal
    } = EditReview(review._id)
    const setting = {
        size: 20,
        count: 5,
        color: "#5b5b5b",
        activeColor: "#ffc107",
        value: data.ratings,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star"/>,
        halfIcon: <i className="fa fa-star-half-alt"/>,
        filledIcon: <i className="fa fa-star"/>,
        onChange: handlerOnChangeRating
    };
    const {deleteHandler} = DestroyReview(review._id)
    return (
        <div>
            <Row className="mt-3">
                <Col className="d-felx me-5">
                    <div className="rate-name  d-inline ms-2">{review?.user?.name}</div>
                    <StarFill className="text-warning"/>
                    <div className="cat-rate  d-inline  p-1 pt-2">{review?.ratings}</div>
                </Col>
                <Col className="text-end">
                    <Button variant="outline-warning" size="sm" className="me-2" onClick={() => setShowModal(true)}>
                        <Pencil/>
                    </Button>
                    <Button variant="outline-danger" size="sm" onClick={deleteHandler}>
                        <Trash2/>
                    </Button>
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-felx me-4 pb-2">
                    <div className="rate-description  d-inline ms-2">{review?.title}</div>
                </Col>
            </Row>
            {/* Edit Modal */}
            {showModal && (
                <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <ReactStars {...setting} />
                        </Form.Group>
                        <Form.Group controlId="editTitle">
                            <FloatingLabel controlId="title" label="Title">
                                <Form.Control
                                    id="title"
                                    name="title"
                                    as="textarea"
                                    placeholder="Enter the description"
                                    className={errors.some(error => error.param === "title") && 'is-invalid'}
                                    style={{height: '100px'}}
                                    value={data.title}
                                    onChange={handlerOnChangeInput}
                                /> {errors.some(error => error.param === "title") &&
                                <Form.Text className="text-danger">
                                    {errors.find(error => error.param === "title").msg}
                                </Form.Text>}
                            </FloatingLabel>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={() => setShowModal(false)}>
                            <XCircleFill/>
                        </Button>
                        <Button variant="outline-primary" type="submit" onClick={UpdateHandler}>
                            <SdCardFill/>
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default RateItem;
