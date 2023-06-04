import React from 'react'
import {Container, Spinner} from 'react-bootstrap'
import CategoryHeader from "../../Components/Category/CategoryHeader";
import ProductHomeItemContainer from "../../Components/Product/ProductHomeItemContainer";
import RateContainer from "../../Components/Rate/RateContainer";
import ProductDetailsContainer from "../../Components/Product/ProductDetailsContainer";
import {useParams} from "react-router-dom";
import ShowProductForm from "../../Controllers/Product/ShowProductForm";

const ProductDetails = () => {
    const {id} = useParams();
    const {product, loading} = ShowProductForm(id)

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center py-2">
                <Spinner animation="grow" role="status" variant="secondary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <Spinner animation="grow" role="status" variant="secondary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <Spinner animation="grow" role="status" variant="secondary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }
    return (
        <div style={{minHeight: '670px'}}>
            <CategoryHeader/>
            <Container>
                <ProductDetailsContainer product={product} loading={loading}/>
                <RateContainer />
                <ProductHomeItemContainer title="Products maybe like it"/>
            </Container>
        </div>
    )
}

export default ProductDetails
