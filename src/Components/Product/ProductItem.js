import React from "react";
import {Card, Col} from "react-bootstrap";
import rate from "../../assets/images/rate.png";
import {Link} from "react-router-dom";
import WishlistController from "../../Controllers/WishlistController";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {Heart, HeartFill} from "react-bootstrap-icons"

const ProductItem = ({product}) => {
    const {handleToggleWishlist, isProductInWishlist, loggedUserWishlist} = WishlistController({
        productId: product._id
    });
    return (
        <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "345px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)"
                }}
            >
                <Link to={`/products/${product._id}`} style={{textDecoration: "none"}}>
                    <Card.Img style={{height: "228px", width: "100%"}} src={product.imageCover}/>
                </Link>
                <div className="d-flex justify-content-end mx-2 py-2">
                    {isProductInWishlist ? (
                            <HeartFill size={20} className="text-danger" onClick={handleToggleWishlist}/>) :
                        <Heart size={20} onClick={handleToggleWishlist}/>}
                </div>
                <Card.Body>
                    <Card.Title>
                        <div className="card-title">{product.title}</div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <img className="" src={rate} alt="" height="16px" width="16px"/>
                                <div className="card-rate mx-2">4.5</div>
                            </div>
                            <div className="d-flex">
                                <div className="card-price">{product.price}</div>
                                <div className="card-currency mx-1">$</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductItem;
