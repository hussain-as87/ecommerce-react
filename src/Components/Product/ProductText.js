import React, {useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import {CartPlus, Heart, HeartFill, StarFill} from "react-bootstrap-icons";
import {CreateCartItem} from "../../Controllers/CartController";
import ReactStars from "react-rating-stars-component";
import RateContainer from "../Rate/RateContainer";
import RenderStars from "../Utility/RenderStars";
import WishlistController from "../../Controllers/WishlistController";

const ProductText = ({product}) => {
    const filledStars = Math.floor(product?.ratingsAverage || 0);
    const outlineStars = 5 - filledStars;
    const {handleToggleWishlist, isProductInWishlist} = WishlistController({productId: product?._id});
    const HeartIcon = isProductInWishlist ? HeartFill : Heart;
    const {data, handleSubmit, isPress, handlerOnChangeInput} = CreateCartItem(product._id)
    return (
        <div className="product__details__content">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div className="product__details__text">
                            <h4>{product?.title}</h4>
                            <div className="rating">
                                {RenderStars(filledStars, outlineStars)}
                                <span> - {product?.ratingQuantity} Reviews</span>
                            </div>
                            <h3>
                                {product?.priceAfterDiscount ?
                                    <> ${product?.priceAfterDiscount}<span>${product?.price}</span></> : <>${product?.price}</>}</h3>
                            <p>
                                Coat with quilted lining and an adjustable hood. Featuring long
                                sleeves with adjustable cuff tabs, adjustable asymmetric hem
                                with elastic side tabs and a front zip fastening with placket.
                            </p>
                            <form onSubmit={handleSubmit}>

                                <div className="product__details__option">
                                    <div className="product__details__option__color">
                                        <span>Color:</span>
                                        {product?.colors?.map((col, index) => (
                                            <label key={col}
                                                   className={`c-${index + 1} ${data.color === col ? 'border-primary' : ''}`}
                                                   htmlFor={`sp-${index + 1}`}>
                                                <input
                                                    id={`sp-${index + 1}`}
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
                                <div className="product__details__cart__option">
                                    <div className="quantity">
                                        <div className="pro-qty">
                                            <input type="number" value={data.quantity}
                                                  name="quantity"
                                            onChange={handlerOnChangeInput}
                                            />
                                        </div>
                                    </div>
                                    <button className="primary-btn" type="submit">
                                        add to cart
                                    </button>
                                </div>
                            </form>
                            <div className="product__details__btns__option">
                                <a href="#"  onClick={handleToggleWishlist}>
                                    <HeartIcon size={20} className={isProductInWishlist ? "text-danger" : "text-dark"}/> add to wishlist
                                </a>
                            </div>
                            <div className="product__details__last__option">
                                <h5>
                                    <span>Guaranteed Safe Checkout</span>
                                </h5>
                                <img src="img/shop-details/details-payment.png" alt=""/>
                                <ul>
                                    <li>
                                        <span>SKU:</span> {product?._id}
                                    </li>
                                    <li>
                                        <span>Categories:</span> {product?.category?.name}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="product__details__tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        data-toggle="tab"
                                        href="#tabs-5"
                                        role="tab"
                                    >
                                        Description
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        data-toggle="tab"
                                        href="#tabs-6"
                                        role="tab"
                                    >
                                        Customer Previews({product?.ratingQuantity})
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-5" role="tabpanel">
                                    <div className="product__details__tab__content">
                                        {product?.description}
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-6" role="tabpanel">
                                    <div className="product__details__tab__content">
                                        <RateContainer product={product} productId={product?._id}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductText