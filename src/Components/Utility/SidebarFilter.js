import React from 'react';
import {Row, Col, Form} from 'react-bootstrap';

const SidebarFilter = () => {
    return (
        <div className="mt-3 ">
            <Row>
                <Col className="py-2">
                    <Form>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Check type="checkbox" label="All" />
                            <Form.Check type="checkbox" label="Home" />
                            <Form.Check type="checkbox" label="Electronic" />
                            <Form.Check type="checkbox" label="Building" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col className="py-2">
                    <Form>
                        <Form.Group>
                            <Form.Label>Brand</Form.Label>
                            <Form.Check type="checkbox" label="All" />
                            <Form.Check type="checkbox" label="Apple" />
                            <Form.Check type="checkbox" label="Samsung" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col className="py-2">
                    <Form>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Row>
                                <Col xl={12} xs={12} md={4} sm={12}>
                                    <Form.Text>From</Form.Text>
                                    <Form.Control type="number" placeholder="0" />
                                </Col>
                                <Col xl={12} xs={12} md={4} sm={12}> <Form.Text>To</Form.Text>

                                    <Form.Control type="number" placeholder="0" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default SidebarFilter;
