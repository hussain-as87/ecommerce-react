import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import WishlistController from "../../Controllers/WishlistController";
import {Heart, HeartFill, Search} from "react-bootstrap-icons"
import noneImage from "../../assets/images/avatar.png"
import {CreateCartItem} from "../../Controllers/CartController";
import RenderStars from "../Utility/RenderStars";

const ProductItem = ({
                         product: {
                             _id,
                             imageCover,
                             colors,
                             title,
                             ratingsAverage,
                             ratingQuantity,
                             price,
                             priceAfterDiscount,
                             category
                         }
                     }) => {
    const {handleToggleWishlist, isProductInWishlist} = WishlistController({productId: _id});
    const HeartIcon = isProductInWishlist ? HeartFill : Heart;
    const [img, setImg] = useState(false);

    const {data, handleSubmit, handlerOnChangeInput} = CreateCartItem(_id)
    const filledStars = Math.floor(ratingsAverage || 0);
    const outlineStars = 5 - filledStars;
    useEffect(() => {
        // Check the validity of the image URL
        const checkImageValidity = async () => {
            try {
                const response = await fetch(imageCover);
                if (response.ok)
                    setImg(true);
            } catch (error) {
                setImg(false);
            }
        };

        checkImageValidity();
    }, [imageCover]);
    return (
        <div className={`col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix ${category?.name}`}>
            <div className="product__item sale">
                <Link to={`/${_id}`}>
                    <div
                        className="product__item__pic set-bg py-2"
                        data-setbg={img ? imageCover : noneImage}
                        style={{backgroundImage: `url(${img ? imageCover : noneImage})`}}
                    >
                        <span className="label">New</span>
                        <span className="label">Sale</span>
                        <ul className="product__hover">
                            <li>
                                <a href="#">
                                    <HeartIcon size={20} className={isProductInWishlist ? "text-danger" : "text-dark"}
                                               onClick={handleToggleWishlist}/> </a>
                            </li>
                            <li>
                                <Link to={`/${_id}`}>
                                    <Search className="text-dark" size={20}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Link>
                <div className="product__item__text">
                    <h6>{title}</h6>
                    <a href="#" onClick={handleSubmit} className="add-cart">
                        + Add To Cart
                    </a>
                    <div className="rating">
                        {RenderStars(filledStars, outlineStars)}
                        <span></span>
                    </div>
                    <h5>{priceAfterDiscount ?
                        <> ${priceAfterDiscount}<span>${price}</span></> : <>${price}</>}</h5>
                    <div className="product__color__select">
                        <form>{colors?.map((col) => (
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
                        ))}</form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default React.memo(ProductItem);
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
                    </div>*/
}