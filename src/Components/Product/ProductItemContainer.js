import {Container, Row} from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import ProductItem from "./ProductItem";

const ProductItemContainer = ({title,btn,path}) => {
    return (
        <Container>
            <SubTitle title={title} btn={btn} path={path}/>
            <Row className={"my-2 d-flex justify-content-between"}>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </Row>
        </Container>
    )
}
export default ProductItemContainer