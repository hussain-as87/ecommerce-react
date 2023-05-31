import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from "../../Components/Category/CategoryHeader";
import ProductHomeItemContainer from "../../Components/Product/ProductHomeItemContainer";
import RateContainer from "../../Components/Rate/RateContainer";
import ProductDetailsContainer from "../../Components/Product/ProductDetailsContainer";
const ProductDetails = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
           <Container>
                 <ProductDetailsContainer />
                <RateContainer />
               <ProductHomeItemContainer title="Products maybe like it" />
         </Container>
        </div>
    )
}

export default ProductDetails
