import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const ProductGallery = ({images, imageCover}) => {
    const [tabe, setTabe] = useState("")

    useEffect(() => {
        setTabe("#tabs-1"); // Set the default tab when the component mounts
    }, []);
    return (
        <div className="product__details__pic">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="product__details__breadcrumb">
                            <Link to="/">Home</Link>
                            <Link to="/shop">Shop</Link>
                            <span>Product Details</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <ul className="nav nav-tabs" role="tablist">
                            {images.map((img, index) => (
                                <li className="nav-item">
                                    <a className={`nav-link ${tabe===`#tabe-${index+1}`?'active':''}`} data-toggle="tab"
                                       href={`#tabs-${index + 1}`}
                                       onClick={()=>setTabe(`#tabs-${index + 1}`)}
                                       role="tab">
                                        <div
                                            className="product__thumb__pic set-bg"
                                            data-setbg={img}
                                            style={{ backgroundImage: `url(${img})` }}
                                        ></div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-6 col-md-9">
                        <div className="tab-content">
                            {images.map((img, index) => (
                                <div className={`tab-pane ${tabe===`#tabs-${index + 1}`?'active':''}`} id={`tabs-${index + 1}`} role="tabpanel">
                                    <div className="product__details__pic__item">
                                        <img src={img} alt={img}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductGallery;
