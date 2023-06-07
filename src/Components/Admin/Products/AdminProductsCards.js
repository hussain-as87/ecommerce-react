import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import DestroyProductForm from "../../../Controllers/Product/DestroyProductForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash,faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const AdminProductsCards = ({product}) => {
    const {deleteHandler} = DestroyProductForm(product?._id)
    return (
        <Col xs={12} sm={6} md={5} lg={4} className="d-flex">
            <Card className="my-2"
                  style={{
                      width: "100%",
                      height: "350px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "#FFFFFF"
                  }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className="d-flex justify-content-between">
                        <div className="d-inline item-delete-edit" onClick={deleteHandler}><FontAwesomeIcon
                            icon={faTrash} size="1x" style={{color:"#f03"}}/></div>
                        <div className="d-inline item-delete-edit" style={{color: "#ffd600"}}><FontAwesomeIcon
                            icon={faPenToSquare} size="1x"/></div>
                    </Col>
                </Row>
                <Link to="products/:id" style={{textDecoration: 'none'}}>
                    <Card.Img style={{width: '100%', height: '228px'}} src={product.imageCover}/>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-between">
                                <div className="card-rate">4.5</div>
                                <div className="d-flex">
                                    <div className="card-currency mx-1">$</div>
                                    <div className="card-currency mx-1">{product.price}</div>
                                    <div></div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}
export default AdminProductsCards