import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import ProductItemContainer from "../../Components/Product/ProductItemContainer";
import Pagination from "../../Components/Utility/Pagination";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchResultCount from "../../Components/Utility/SearchResultCount";
import SidebarFilter from "../../Components/Utility/SidebarFilter";

const Products = () => {
    return (
        <div style={{minHeight: '670px'}}>
            <CategoryHeader/>
            <Container>
                <SearchResultCount title="the result of search is 120"/>
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="1" className='d-flex py-2'>
                        <SidebarFilter/>
                    </Col>
                        <Col sm="10" xs="10" md="11">
                            <ProductItemContainer title="Prodcuts" btn="more" path="products"/>
                        </Col>
                </Row>
                <Pagination/>
            </Container>
        </div>
    )
}

export default Products
