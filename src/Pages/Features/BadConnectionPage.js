import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";

const BadConnectionPage = () => {
    return (
        <div className="bad-connection-page">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} className="text-center">
                        <FontAwesomeIcon icon={faWifi} size="4x" className="wifi-icon" />
                        <h1 className="heading">Bad Connection</h1>
                        <p className="message">
                            We're sorry, but it seems that your internet connection is
                            experiencing difficulties.
                        </p>
                        <p className="message">
                            Please check your connection and try again.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BadConnectionPage;
