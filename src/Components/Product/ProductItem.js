import React, {useState} from "react";
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import WishlistController from "../../Controllers/WishlistController";
import {Heart, HeartFill, Search, StarFill} from "react-bootstrap-icons"
import avatar from "../../assets/images/image.png"
import LimitCharacters from "../../Hooks/LimitCharacters";
import ReactStars from "react-rating-stars-component";
import {CreateCartItem} from "../../Controllers/CartController";

const ProductItem = ({product: {_id, imageCover,colors, title, ratingsAverage, price, priceAfterDiscount,category}}) => {
    const {handleToggleWishlist, isProductInWishlist} = WishlistController({productId: _id});
    const HeartIcon = isProductInWishlist ? HeartFill : Heart;
      const [isImgError, setIsImgError] = useState(false);

    const handleImageError = () => {
        setIsImgError(true);
    };

    const {data, handleSubmit, handlerOnChangeInput} = CreateCartItem(_id)

    return (

        <div className={`col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix ${category.name}`}>
            <div className="product__item sale">
                <div
                    className="product__item__pic set-bg"
                    data-setbg="img/product/product-5.jpg"
                    style={{ backgroundImage: 'url("img/product/product-5.jpg")' }}
                >
                    <span className="label">New</span>
                    <span className="label">Sale</span>
                    <ul className="product__hover">
                        <li>
                            <a href="#">
                             {/*   <img src="img/icon/heart.png" alt="" className={isProductInWishlist ? "text-danger" : ""}
                                     onClick={handleToggleWishlist}/>*/}
                                <HeartIcon size={20} className={isProductInWishlist ? "text-danger" : "text-dark"}
                                           onClick={handleToggleWishlist}/>                            </a>
                        </li>
                       {/* <li>
                            <a href="#">
                                <img src="img/icon/compare.png" alt="" />{" "}
                                <span>Compare</span>
                            </a>
                        </li>*/}
                        <li>
                            <Link to={`/products/${_id}`}>
                               <Search className="text-dark" size={20}/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="product__item__text">
                    <h6>{title}</h6>
                    <a onClick={handleSubmit} className="add-cart">
                        + Add To Cart
                    </a>
                    <div className="rating">
                        <ReactStars value={ratingsAverage} size={20} disable/>
                    </div>
                    <h5>${price}</h5>
                    <div className="product__color__select">
                        {colors?.map((col) => (
                            <label key={col}
                                   className={`color ms-2 border ${data.color === col ? 'border-primary' : ''}`}
                                   style={{backgroundColor: col}}>
                                <input
                                    type="radio"
                                    name="color"
                                    value={col}
                                    checked={data.color === col}
                                    onChange={handlerOnChangeInput}
                                    hidden={true}
                                />
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
{/*                    <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                        <div className="product__item">
                            <div
                                className="product__item__pic set-bg"
                                data-setbg="img/product/product-1.jpg"
                                style={{ backgroundImage: 'url("img/product/product-1.jpg")' }}
                            >
                                <span className="label">New</span>
                                <ul className="product__hover">
                                    <li>
                                        <a href="#">
                                            <img src="img/icon/heart.png" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon/compare.png" alt="" />{" "}
                                            <span>Compare</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon/search.png" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6>Piqué Biker Jacket</h6>
                                <a href="#" className="add-cart">
                                    + Add To Cart
                                </a>
                                <div className="rating">
                                    <i className="fa fa-star-o" />
                                    <i className="fa fa-star-o" />
                                    <i className="fa fa-star-o" />
                                    <i className="fa fa-star-o" />
                                    <i className="fa fa-star-o" />
                                </div>
                                <h5>$67.24</h5>
                                <div className="product__color__select">
                                    <label htmlFor="pc-1">
                                        <input type="radio" id="pc-1" />
                                    </label>
                                    <label className="active black" htmlFor="pc-2">
                                        <input type="radio" id="pc-2" />
                                    </label>
                                    <label className="grey" htmlFor="pc-3">
                                        <input type="radio" id="pc-3" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                        <div className="product__item sale">
                            <div
                                className="product__item__pic set-bg"
                                data-setbg="img/product/product-3.jpg"
                                style={{ backgroundImage: 'url("img/product/product-3.jpg")' }}
                            >
                                <span className="label">Sale</span>
                                <ul className="product__hover">
                                    <li>
                                        <a href="#">
                                            <img src="img/icon/heart.png" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon/compare.png" alt="" />{" "}
                                            <span>Compare</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon/search.png" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6>Multi-pocket Chest Bag</h6>
                                <a href="#" className="add-cart">
                                    + Add To Cart
                                </a>
                                <div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o" />
                                </div>
                                <h5>$43.48</h5>
                                <div className="product__color__select">
                                    <label htmlFor="pc-7">
                                        <input type="radio" id="pc-7" />
                                    </label>
                                    <label className="active black" htmlFor="pc-8">
                                        <input type="radio" id="pc-8" />
                                    </label>
                                    <label className="grey" htmlFor="pc-9">
                                        <input type="radio" id="pc-9" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>*/}
export default React.memo(ProductItem);
/* <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
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
        </Col>*/