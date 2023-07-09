import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {Dash, Plus, StarFill, Trash2} from "react-bootstrap-icons";
import LimitCharacters from "../../Hooks/LimitCharacters";
import {DestroyCartItem, EditCartItemsQuantity} from "../../Controllers/CartController";

const CartItem = ({item}) => {
    const {data, inc, dec, handlerOnChangeInput} = EditCartItemsQuantity(item?._id, item?.quantity)
    const {deleteHandler} = DestroyCartItem(item?._id)
    const {quantity} = data;
    return (
        <Col xs="12" className="cart-item-body my-2 d-flex px-2">
            <img width="35%" src={item?.product?.imageCover} alt="" className="m-2"/>
            <div className="w-100">
                <Row className="justify-content-between">
                    <Col sm="12" className=" d-flex flex-row justify-content-between">
                        <div className="d-inline pt-2 cat-text">{item?.product?.category?.name}</div>
                        <div className="d-flex pt-2 " style={{cursor: "pointer"}}>
                            <Trash2 size={20} className="text-danger" onClick={deleteHandler}/>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                    <Col sm="12" className=" d-flex flex-row justify-content-start">
                        <div className="d-inline pt-2 cat-title">
                            {item?.product?.description && LimitCharacters(item?.product?.description, 49)}
                        </div>
                        {item?.product?.ratingsAverage && (<>
                                <div
                                    className="d-inline pt-2 cat-rate me-2 m-1">{item?.product?.ratingsAverage}</div>
                                <StarFill size={35}
                                          className="text-warning"/>
                            </>
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="mt-1">
                        <div className="cat-text d-inline">brand :</div>
                        <div className="barnd-text d-inline mx-1">{item?.product?.brand?.name} </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="mt-1 d-flex">
                        <div
                            className="color ms-2 border"
                            style={{backgroundColor: item.color}}></div>
                    </Col>
                </Row>

                <Row className="justify-content-between">
                    <Col sm="12" className=" d-flex flex-row justify-content-between">
                        <div className="d-inline pt-2 d-flex">
                            <div className="cat-text  d-inline me-2">quantity</div>
                            <Dash size={20} onClick={dec}/>
                            <input
                                className="mx-2"
                                type="number"
                                name="quantity"
                                onChange={handlerOnChangeInput}
                                value={quantity}
                                style={{width: "30px", height: "25px"}}
                            />
                            <Plus size={20} onClick={inc}/>
                        </div>
                        <div className="d-inline pt-2 barnd-text text-primary">{item.price}</div>
                        <div className="d-inline pt-2 barnd-text">total: {item.price * quantity} $</div>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default CartItem
