import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import ProductItemContainer from "../../Components/Product/ProductHomeItemContainer";
import Pagination from "../../Components/Utility/Pagination";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchResultCount from "../../Components/Utility/SearchResultCount";
import SidebarFilter from "../../Components/Utility/SidebarFilter";

const Products = ({index}) => {
    const {
        products, loading,
        getPage, pageCount,
        search, onChangeSearch,
        sort, onChangeSort,
    } = index
    return (
        <div style={{minHeight: '670px'}}>
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
                {pageCount > 1 && (<Pagination pageCount={pageCount} onPress={getPage}/>)}
            </Container>
        </div>
    )
}

export default Products
