import React from 'react'
import {Row, Col} from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import ProductText from './ProductText'

const ProductDetailsContainer = ({product, loading}) => {

    if (!product || !product.data) {
        return <div>No product data available.</div>;
    }
    return (
        <div>
            <Row className="py-3">
                <Col lg="4">
                    <ProductGallery images={product.data.images} imageCover={product.data.imageCover} />
                </Col>
                <Col lg="8">
                    <ProductText product={product.data} />
                </Col>
            </Row>
        </div>
    );
}

export default ProductDetailsContainer
