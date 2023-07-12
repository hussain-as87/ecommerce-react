import {Container, Row, Spinner} from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import ProductItem from "./ProductItem";
import React from "react";

const ProductHomeItemContainer = ({title, btn, path, products, loading, exceptID}) => {
    return (
        <Container>
            <SubTitle title={title} btn={btn} path={path}/>
            <Row className="my-2 d-flex justify-content-between">
                {loading === false ? (products.data && products.data.slice(0,6).map((product) => {
                            if (product._id !== exceptID) {
                                return <ProductItem product={product} key={product._id}/>
                            }
                        }
                    )) :
                    <div className="text-center"><Spinner
                        animation="border"
                        variant="secondary"
                        style={{width: '100px', height: '100px'}}
                    />
                    </div>
                }
            </Row>
        </Container>
    )
}
export default ProductHomeItemContainer