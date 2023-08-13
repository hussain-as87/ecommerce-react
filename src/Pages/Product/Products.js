import React from 'react'
import {Col, Container, Row, Spinner} from 'react-bootstrap'
import ProductItemContainer from "../../Components/Product/ProductHomeItemContainer";
import Pagination from "../../Components/Utility/Pagination";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchResultCount from "../../Components/Utility/SearchResultCount";
import SidebarFilter from "../../Components/Utility/SidebarFilter";
import ProductItem from "../../Components/Product/ProductItem";

const Products = ({index}) => {
    const {
        products, loading,
        getPage, pageCount,
        search, onChangeSearch,
        sort, onChangeSort,
        keyword, onChangeKeyWord
    } = index

    return (
        <>
            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Shop</h4>
                                <div className="breadcrumb__links">
                                    <a href="./index.html">Home</a>
                                    <span>Shop</span>
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
                       <SidebarFilter index={index}/>
                        <br/>
                        <div className="col-lg-9">
                            <SearchResultCount title={`Showing 1–12 of ${products?.result} results`} sort={sort}
                                               onChangeSort={onChangeSort}/>
                            <div className="row">
                                <div className="row product__filter" id="MixItUp74A58B">
                                    {!loading ? (products?.data?.map((product) => {
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
                            {pageCount > 1 && (<Pagination pageCount={pageCount} onPress={getPage}/>)}
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Section End */}
        </>
    )
}

export default Products
/*<div style={{minHeight: '670px'}}>
            <CategoryHeader  onChangeSearch={onChangeSearch}/>
            <Container>
                <SearchResultCount title={`results ${products && products.result}`} sort={sort}
                                   onChangeSort={onChangeSort}/>
                <Row className='d-flex flex-row'>

                    <Col sm="12" xs="12" md="3" className='d-flex py-2 '>
                        <SidebarFilter search={search} onChangeSearch={onChangeSearch}/>
                    </Col>
                    <Col sm="12" xs="12" md="9">
                        <ProductItemContainer title="Prodcuts" btn="More" path="/products" products={products}
                                              loading={loading}/>
                    </Col>
                </Row>
            </Container>
        </div>*/