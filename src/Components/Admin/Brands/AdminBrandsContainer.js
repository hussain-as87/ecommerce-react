import {Card, Container, Spinner, Table} from "react-bootstrap";
import AdminBrands from "./AdminBrands";
import React from "react";

const AdminBrandsContainer = ({brands, loading}) => {
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
                <Card.Title className="">Brands</Card.Title>
                <Table striped hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {brands?.data?.map((brand) => (
                        <AdminBrands key={brand._id} brand={brand}/>
                    ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    </Container>

}
export default AdminBrandsContainer