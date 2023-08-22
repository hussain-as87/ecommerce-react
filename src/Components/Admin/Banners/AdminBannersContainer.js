import {Card, Container, Spinner, Table} from "react-bootstrap";
import AdminBanners from "./AdminBanners";
import React from "react";

const AdminBannersContainer = ({banners, loading}) => {
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
                <Card.Title className="">Banners</Card.Title>
                <Table striped hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>subtitle</th>
                        <th>summary</th>
                        <th>description</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {banners?.data?.map((banner) => (
                        <AdminBanners key={banner._id} banner={banner}/>
                    ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    </Container>

}
export default AdminBannersContainer