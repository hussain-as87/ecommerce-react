import React from 'react'
import {Button, Col, FloatingLabel, Form, Row} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import {CreateReview} from "../../Controllers/ReviewController";
import {GetLoggedUser} from "../../Controllers/UserController";

const RatePost = () => {
    const {user: lu} = GetLoggedUser()
    const user = lu.data || []
    const {handleSubmit, handlerOnChangeInput, handlerOnChangeRating, data, errors, isPress} = CreateReview()
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
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Row className="border-bottom mx-2">
                    <Col className="d-felx me-4 pb-2">
                        <ReactStars {...setting}/>
                        <FloatingLabel controlId="title" label="Leave a comment..">
                            <Form.Control
                                id="title"
                                name="title"
                                as="textarea"
                                placeholder="Enter the description"
                                className={errors.some(error => error.param === "title") && 'is-invalid'}
                                style={{height: '100px'}}
                                value={data.title}
                                onChange={handlerOnChangeInput}
                            />
                            {errors.some(error => error.param === "title") &&
                                <Form.Text className="text-danger">
                                    {errors.find(error => error.param === "title").msg}
                                </Form.Text>}
                        </FloatingLabel>
                        <div className="d-flex justify-content-end al py-1">
                            <Button type="submit" variant="outline-primary"
                                    className="px-3  py-2 text-center d-inline">Send</Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default RatePost
