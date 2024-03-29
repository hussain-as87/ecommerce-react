import React from 'react'
import {Spinner} from 'react-bootstrap'
import ProductDetailsContainer from "../../Components/Product/ProductDetailsContainer";
import {useParams} from "react-router-dom";
import {GetProduct, GetProductsByCategory} from "../../Controllers/ProductController";
import ProductItem from "../../Components/Product/ProductItem";

const ProductDetails = () => {
    const {id} = useParams();
    const {product, loading} = GetProduct(id)
    const {categoryProducts, loadingCP} = GetProductsByCategory(product?.data?.category.name)

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center py-2">
                <Spinner animation="border" role="status" variant="primary">
                </Spinner>
            </div>
        );
    }
    return (<>
        {/* Shop Details Section Begin */}
        <ProductDetailsContainer product={product} loading={loading}/>
        {/* Shop Details Section End */}
        {/* Related Section Begin */}
        <section className="related spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="related-title">Related Product</h3>
                    </div>
                </div>
                <div className="row">
                    {categoryProducts?.data?.map((prod) => (
                            prod._id !== product?.data?._id && <ProductItem product={prod}/>
                        )
                    )}
                </div>
            </div>
        </section>
        {/* Related Section End */}
    </>)
}

export default ProductDetails
