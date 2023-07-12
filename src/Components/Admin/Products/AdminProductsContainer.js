import {Card, Container, Row, Spinner} from "react-bootstrap";
import AdminProductsCards from "./AdminProductsCards";
import React from "react";

const AdminProductsContainer = ({products, loading}) => {
    return <Container>
        <Card>
            <Card.Body>
                <Card.Title className="">Products</Card.Title>
                {!loading ? (products?.data?.map((product) => (
                    <AdminProductsCards product={product}/>))) : (<div className="text-center"><Spinner
                    animation="border"
                    variant="secondary"
                    style={{width: '100px', height: '100px'}}
                />
                </div>)}
            </Card.Body>
        </Card>
    </Container>

}
export default AdminProductsContainer