import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import DestroyProductForm from "../../../Controllers/Product/Admin/DestroyProductForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const AdminProductsCards = ({product}) => {
    const {deleteHandler} = DestroyProductForm(product?._id)
    return (
        <>  <Row className="d-flex justify-content-center px-2">
            <Col className="d-flex justify-content-between">
                <div className="d-inline item-delete-edit" onClick={deleteHandler}>
                    <FontAwesomeIcon icon={faTrash} size="1x" style={{color: "#f03"}}/>
                </div>
                <Link to={`/admin/products/edit/${product._id}`}>
                    <div className="d-inline item-delete-edit" style={{color: "#ffd600"}}><FontAwesomeIcon
                        icon={faPenToSquare} size="1x"/></div>
                </Link>
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
        </>


    )
}
export default AdminProductsCards