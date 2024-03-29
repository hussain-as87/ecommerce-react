import React, {useRef} from 'react'
import {Form, Button, Container, Card, Spinner} from 'react-bootstrap'
import AdminCouponCard from "./AdminCoupnCard";
import {CreateCoupon, GetCoupons} from "../../../Controllers/CouponController";
import Pagination from "../../Utility/Pagination";
import {Check2Circle} from "react-bootstrap-icons";

const AdminAddCoupon = () => {
    const dateRef = useRef();
    const {data, errors, handlerOnChangeInput, handleSubmit, isPress} = CreateCoupon()
    const {coupons, getPage, loading, pageCount} = GetCoupons()
    return (
        <Container>
            <Card className="">
                <Card.Body>
                    <Card.Title className="">Create Coupon</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <label htmlFor="name">Name</label>
                            <Form.Control
                                id="name"
                                type="text"
                                placeholder="the name of the brand"
                                name="name"
                                className={errors.some(error => error.param === "name") && 'is-invalid'}
                                onChange={handlerOnChangeInput}
                                value={data.name}/>
                            {errors.some(error => error.param === "name") &&
                                <Form.Text className="text-danger">
                                    {errors.find(error => error.param === "name").msg}
                                </Form.Text>
                            }
                        </Form.Group>
                        <br/>
                        <Form.Group>
                            <label htmlFor="expire">Expire</label>
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
                        </Form.Group>
                        <br/>
                        <Form.Group>
                            <label htmlFor="discount">Discount</label>
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
                        </Form.Group>
                        <br/>
                        <Button
                            type="submit"
                            variant="outline-primary"
                            className="mt-2"
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
            <Card className="mt-2">
                <Card.Body>
                    {coupons ? (coupons?.data?.map((item, index) => {
                        return (
                            <>
                                <AdminCouponCard key={index} coupon={item}/>
                            </>
                        )
                    })) : <h6>There is no coupons!</h6>
                    }
                    {pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage}/>}
                </Card.Body>
            </Card>
        </Container>
    )
}

export default AdminAddCoupon