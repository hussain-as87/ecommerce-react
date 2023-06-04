import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import ProductItemContainer from "../../Components/Product/ProductHomeItemContainer";
import Pagination from "../../Components/Utility/Pagination";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchResultCount from "../../Components/Utility/SearchResultCount";
import SidebarFilter from "../../Components/Utility/SidebarFilter";
import IndexProductForm from "../../Controllers/Product/IndexProductForm";

const Products = () => {
    const {products, loading, getPage, pageCount} = IndexProductForm()

    return (
        <div style={{minHeight: '670px'}}>
            <CategoryHeader/>
            <Container>
                <SearchResultCount title={`results ${products.data && products.data.length}`}/>
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="1" className='d-flex py-2'>
                        <SidebarFilter/>
                    </Col>
                        <Col sm="10" xs="10" md="11">
                            <ProductItemContainer title="Prodcuts" btn="More" path="/products" products={products} loading={loading}/>
                        </Col>
                </Row>
                {pageCount > 1 && (<Pagination pageCount={pageCount} onPress={getPage}/>)}
            </Container>
        </div>
    )
}

export default Products
