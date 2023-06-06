import {Container, Row, Spinner} from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import ProductItem from "./ProductItem";

const ProductHomeItemContainer = ({title, btn, path, products, loading, exceptID}) => {
    return (
        <Container>
            <SubTitle title={title} btn={btn} path={path}/>
            <Row className="my-2 d-flex justify-content-between">
                {loading === false ? (products.data && products.data.map((product) => {
                            if (product._id !== exceptID) {
                                return <ProductItem product={product} key={product._id}/>
                            }
                        }
                    )) :
                    <div className="d-flex justify-content-center align-items-center py-md-2 py-sm-1">
                        <Spinner animation="border" variant="primary"/>
                    </div>
                }
            </Row>
        </Container>
    )
}
export default ProductHomeItemContainer