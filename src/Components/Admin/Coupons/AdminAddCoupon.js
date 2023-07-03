import React, {useRef} from 'react'
import {Row, Col, Form, FloatingLabel, Button} from 'react-bootstrap'
import AdminCouponCard from "./AdminCoupnCard";
import {CreateCoupon, GetCoupons} from "../../../Controllers/CouponController";
import Pagination from "../../Utility/Pagination";

const AdminAddCoupon = () => {
    const dateRef = useRef();
    const {data, errors, handlerOnChangeInput, handleSubmit, isPress} = CreateCoupon()
    const {coupons, getPage, loading, pageCount} = GetCoupons()
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-start ">
                    <div className="admin-content-text pb-4">Create new coupon</div>
                    <Col sm={8}>
                        <Form.Group>
                            <FloatingLabel controlId="name" label="Name">
                                <Form.Control
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={handlerOnChangeInput}
                                    type="text"
                                    className={errors.some(error => error.param === "name") && 'is-invalid'}
                                />
                                {errors.some(error => error.param === "name") &&
                                    <Form.Text className="text-danger">
                                        {errors.find(error => error.param === "name").msg}
                                    </Form.Text>
                                }
                            </FloatingLabel>
                        </Form.Group>
                        <br/>
                        <Form.Group>
                            <FloatingLabel controlId="expire" label="Expire date">
                                <Form.Control
                                    id="expire"
                                    ref={dateRef}
                                    type="text"
                                    name="expire"
                                    className={errors.some(error => error.param === "expire") && 'is-invalid'}
                                    onChange={handlerOnChangeInput}
                                    value={data.expire}
                                    onFocus={() => dateRef.current.type = "date"}
                                    onBlur={() => dateRef.current.type = "text"}
                                />
                                {errors.some(error => error.param === "expire") &&
                                    <Form.Text className="text-danger">
                                        {errors.find(error => error.param === "expire").msg}
                                    </Form.Text>
                                }
                            </FloatingLabel>
                        </Form.Group>
                        <br/>
                        <Form.Group>
                            <FloatingLabel controlId="discount" label="Discount percent">
                                <Form.Control
                                    id="discount"
                                    name="discount"
                                    value={data.discount}
                                    onChange={handlerOnChangeInput}
                                    type="number"
                                    className={errors.some(error => error.param === "discount") && 'is-invalid'}
                                />
                                {errors.some(error => error.param === "discount") &&
                                    <Form.Text className="text-danger">
                                        {errors.find(error => error.param === "discount").msg}
                                    </Form.Text>
                                }
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} className="d-flex justify-content-end py-2">
                        <Button type="submit" variant="outline-primary">Submit</Button>
                    </Col>
                </Row>

            </Form>
            <Row>
                <Col sm={8} className="">
                    {coupons ? (coupons?.data?.map((item, index) => {
                        return (
                            <>
                                <AdminCouponCard key={index} coupon={item}/>
                            </>
                        )
                    })) : <h6>There is no coupons!</h6>
                    }
                    {pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage}/>}
                </Col>
            </Row>
        </>
    )
}

export default AdminAddCoupon