import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSideBar from '../../../Components/User/UserSideBar'
import UserCreateAddress from '../../../Components/User/Address/UserCreateAddress';
const UserCreateAddressPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                  <UserCreateAddress />
                </Col>
            </Row>
        </Container>
    )
}
export default UserCreateAddressPage
