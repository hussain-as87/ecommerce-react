import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import phone from "../../assets/images/phone.png";
const Footer = () => {
    return (
        <div className="footer-background footer mt-3 pt-4" style={{ maxHeight: "50px" }}>
        <Container className="">
            <Row className="d-flex justify-content-between align-items-center">
                <Col sm="6" className="d-flex align-items-center ">
                    <div className="footer-shroot ">conditions and provisions</div>
                    <div className="footer-shroot mx-2">privacy</div>
                    <div className="footer-shroot mx-2">connect us</div>
                </Col>
                <Col
                    sm="6"
                    className="d-flex justify-content-end align-items-center ">
                    <div className="d-flex pt-3 mx-2">
                        <img width="20px" height="20px" src={phone} alt="" />
                        <p className="footer-phone">0122455346356</p>
                    </div>
                    <div style={{ cursor: "pointer" }}>
                        <img width="20px" height="20px" src={facebook} alt="" />
                    </div>
                    <div style={{ cursor: "pointer" }} className="">
                        <img width="20px" height="20px" src={instagram} alt="" />
                    </div>
                    <div style={{ cursor: "pointer" }} className="">
                        <img width="20px" height="20px" src={twitter} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>)
}
export default Footer