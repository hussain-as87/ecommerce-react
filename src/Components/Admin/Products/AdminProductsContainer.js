import {Row} from "react-bootstrap";
import AdminProductsCards from "./AdminProductsCards";

const AdminProductsContainer = ({products, loading}) => {
    return <>
        <div className="admin-content-text">Management all products</div>
        <Row className="justify-content-start">
            {!loading && (Array.isArray(products.data) && products.data.map((product) => (<AdminProductsCards product={product}/>)))}
        </Row>
    </>
}
export default AdminProductsContainer