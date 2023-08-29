import React from 'react'
import {Col, Container, Row, Spinner} from 'react-bootstrap'
import ProductItemContainer from "../../Components/Product/ProductHomeItemContainer";
import Pagination from "../../Components/Utility/Pagination";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchResultCount from "../../Components/Utility/SearchResultCount";
import SidebarFilter from "../../Components/Utility/SidebarFilter";
import ProductItem from "../../Components/Product/ProductItem";
import {Link} from "react-router-dom";
import {WishlistProducts} from "../../Controllers/WishlistController";

const Products = () => {
    const {
        loggedUserWishlist,
        loading
    } = WishlistProducts()

    return (
        <>
            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Favorite</h4>
                                <div className="breadcrumb__links">
                                    <Link to="/">Home</Link>
                                    <span>Favorite</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
            {/* Shop Section Begin */}
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="row product__filter" id="MixItUp74A58B">
                                    {!loading ? (loggedUserWishlist?.data?.map((product) => {
                                                return <ProductItem product={product} key={product._id}/>
                                            }
                                        )) :
                                        <div className="text-center"><Spinner
                                            animation="border"
                                            variant="secondary"
                                            style={{width: '100px', height: '100px'}}
                                        />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Section End */}
        </>
    )
}

export default Products
