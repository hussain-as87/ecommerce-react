import {Card, Container, Spinner, Table} from "react-bootstrap";
import AdminSubcategoriesCards from "./AdminSubcategoriesCards";
import React from "react";

const AdminSubcategoriesContainer = ({subcategories, loading}) => {
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
                <Card.Title className="">Subcategories</Card.Title>
                <Table striped hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>category</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {subcategories?.data?.map((subcategory) => (
                        <AdminSubcategoriesCards key={subcategory._id} subcategory={subcategory}/>
                    ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    </Container>

}
export default AdminSubcategoriesContainer