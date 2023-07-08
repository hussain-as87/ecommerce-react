import {Card, Container, Row} from "react-bootstrap";
import AdminProductsCards from "./AdminProductsCards";

const AdminProductsContainer = ({products, loading}) => {
    return <Container>
                <Card>
                    <Card.Body>
                        <Card.Title className="">Products</Card.Title>
                        {!loading && (Array.isArray(products.data) && products.data.map((product) => (
                            <AdminProductsCards product={product}/>)))}
                    </Card.Body>
                </Card>
            </Container>

}
export default AdminProductsContainer