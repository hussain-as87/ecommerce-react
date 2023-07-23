import {Card, Container, Spinner, Table} from "react-bootstrap";
import AdminCategoriesCards from "./AdminCategoriesCards";
import React from "react";

const AdminCategoriesContainer = ({categories, loading}) => {
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
                <Card.Title className="">Categories</Card.Title>
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
                    {categories?.data?.map((category) => (
                        <AdminCategoriesCards key={category._id} category={category}/>
                    ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    </Container>

}
export default AdminCategoriesContainer