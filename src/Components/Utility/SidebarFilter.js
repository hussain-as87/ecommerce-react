import React from 'react';
import {Row, Col, Form} from 'react-bootstrap';
import {GetBrands} from "../../Controllers/BarandController";
import {GetCategories} from "../../Controllers/CategoryController";

const SidebarFilter = ({search,onChangeSearch}) => {

    const {categories} = GetCategories()
    const {brands} = GetBrands()

    return (
        <div className="mt-3 ">
            <Row>
                <Col className="py-2">
                    <Form>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Check type="checkbox" label="All" value="" onClick={onChangeSearch} />
                            {categories?.data?.map((cate) => (
                                <Form.Check key={cate._id} type="checkbox" label={cate.name} value={`category=${cate._id}`} onClick={onChangeSearch} />
                            ))}
                        </Form.Group>
                    </Form>
                </Col>
                <Col className="py-2">
                    <Form>
                        <Form.Group>
                            <Form.Label>Brand</Form.Label>
                            <Form.Check type="checkbox" label="All" value="" onClick={onChangeSearch} />
                            {brands && brands.data && brands.data.map((brand) => (
                                <Form.Check key={brand._id} type="checkbox" label={brand.name} value={`brand=${brand._id}`} onClick={onChangeSearch} />
                            ))}
                        </Form.Group>
                    </Form>
                </Col>
                {/*<Col className="py-2">
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
                </Col>*/}
            </Row>
        </div>
    );
};

export default SidebarFilter;
