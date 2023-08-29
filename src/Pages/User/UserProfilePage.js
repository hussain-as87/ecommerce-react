import React from 'react'
import UserProfile from '../../Components/User/UserProfile';
import {Container} from "react-bootstrap";
import {GetLoggedUser} from "../../Controllers/UserController";

const UserProfilePage = () => {
    const {user, loading} = GetLoggedUser();

    return (
        <Container style={{minHeight: "450px", paddingBottom: '50px'}} className="pt-5">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="contact__text">
                        <div className="section-title">
                            <h2>Profile</h2>
                        </div>
                    </div>
                    {!loading && (
                        user?.data && <>
                            <div className="p-2">Name: <b className="text-danger">{user.data.name}</b>{/*{' '}<Pencil
                                size={15}/>*/}</div>
                            <div className="p-2">Phone number: <b
                                className="text-danger">{user.data.phone || 'No Phone Number'}</b>
                            </div>
                            <div className="p-2">Email-Address: <b className="text-danger">{user.data.email}</b></div>
                        </>)}
                </div>
                <div className="col-lg-6 col-md-6">
                    <br/>
                    <div className="contact__form">
                        <UserProfile/>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default UserProfilePage
