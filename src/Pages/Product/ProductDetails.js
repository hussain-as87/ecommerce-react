import React from 'react'
import {Container, Spinner} from 'react-bootstrap'
import CategoryHeader from "../../Components/Category/CategoryHeader";
import ProductHomeItemContainer from "../../Components/Product/ProductHomeItemContainer";
import RateContainer from "../../Components/Rate/RateContainer";
import ProductDetailsContainer from "../../Components/Product/ProductDetailsContainer";
import {useParams} from "react-router-dom";
import ShowProductForm from "../../Controllers/Product/ShowProductForm";
import IndexCategoryProductsForm from "../../Controllers/Product/IndexCategoryProductsForm";

const ProductDetails = () => {
    const {id} = useParams();
    const {product, loading} = ShowProductForm(id)
    const {categoryProducts, loadingCP} = IndexCategoryProductsForm(product?.data?.category.name)

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center py-2">
                <Spinner animation="border" role="status" variant="primary">
                </Spinner>
            </div>
        );
    }
    return (
        <div style={{minHeight: '670px'}}>
            <CategoryHeader/>
            <Container>
                <ProductDetailsContainer product={product} loading={loading}/>
                <RateContainer product={product} productId={id}/>
                <ProductHomeItemContainer title="Suggestion products" products={categoryProducts} loading={loadingCP}
                                          btn="More" path="/products" exceptID={product?.data?._id}/>
            </Container>
        </div>
    )
}

export default ProductDetails
