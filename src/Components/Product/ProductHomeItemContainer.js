import {Container, Row, Spinner} from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import ProductItem from "./ProductItem";

const ProductHomeItemContainer = ({title, btn, path,products,loading}) => {
    return (
        <Container>
            <SubTitle title={title} btn={btn} path={path}/>
            <Row className="my-2 d-flex justify-content-between">
                {loading === false ? (products.data.slice(0, 6).map((product) => (
                        <ProductItem product={product} key={product._id}/>
                    ))) :
                    <div className="d-flex justify-content-center align-items-center py-md-2 py-sm-1">
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
                }
            </Row>
        </Container>
    )
}
export default ProductHomeItemContainer