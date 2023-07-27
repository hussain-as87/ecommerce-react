import {Card, Container, Spinner, Table} from "react-bootstrap";
import AdminProductsCards from "./AdminProductsCards";
import React from "react";

const AdminProductsContainer = ({products, loading}) => {
    if (loading) {
        return (<div className="text-center pt-5"><Spinner
            animation="border"
            variant="secondary"
            style={{width: '100px', height: '100px'}}
        />
        </div>)
    }
    return <Container>
        <Card>
            <Card.Body>
                <Card.Title className="">Products</Card.Title>
                <Table striped hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>description</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {products?.data?.map((product) => (
                        <AdminProductsCards key={product._id} product={product}/>
                    ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    </Container>

}
export default AdminProductsContainer