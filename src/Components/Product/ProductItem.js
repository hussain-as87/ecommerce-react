import React, {useState} from "react";
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import WishlistController from "../../Controllers/WishlistController";
import {Heart, HeartFill, StarFill} from "react-bootstrap-icons"
import avatar from "../../assets/images/image.png"
import LimitCharacters from "../../Hooks/LimitCharacters";

const ProductItem = ({product: {_id, imageCover, title, ratingsAverage, price, priceAfterDiscount}}) => {
    const {handleToggleWishlist, isProductInWishlist} = WishlistController({productId: _id});
    const HeartIcon = isProductInWishlist ? HeartFill : Heart;
      const [isImgError, setIsImgError] = useState(false);

    const handleImageError = () => {
        setIsImgError(true);
    };
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
                <Link to={`/products/${_id}`} style={{textDecoration: "none"}}> {isImgError ? (
                    <Card.Img style={{height: "228px", width: "100%"}} alt="avatar" src={avatar}/>
                    ) : (
                    <Card.Img style={{height: "228px", width: "100%"}} src={imageCover} onError={handleImageError}/>
                )}
                </Link>
                <div className="d-flex justify-content-end mx-2 py-2">
                    <HeartIcon size={20} className={isProductInWishlist ? "text-danger" : ""}
                               onClick={handleToggleWishlist}/>
                </div>
                <Card.Body>
                    <Card.Title>
                        <div className="card-title">{LimitCharacters(title,30)}</div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between">
                            {ratingsAverage && <div className="d-flex">
                                <StarFill className="text-warning"/>
                                <div className="card-rate mx-2">{ratingsAverage}</div>
                            </div>}

                            <div className="d-flex">
                                <div className="card-price">
                                    {priceAfterDiscount >= 1 ?
                                        (<div><span style={{ textDecorationLine: 'line-through' }}>{price}</span> {priceAfterDiscount}</div>)
                                        : price}
                                </div>
                                <div className="card-currency mx-1">$</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default React.memo(ProductItem);
