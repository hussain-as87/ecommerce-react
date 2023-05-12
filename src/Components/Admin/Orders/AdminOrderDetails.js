import CartItem from "../../Cart/CartItem";
import {Button, Col, Row} from "react-bootstrap";

const AdminOrderDetails = () => {
    return (
        <>
            <div className="admin-content-text">order no #55</div>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className="d-flex">
                    <div className="admin-content-text py-2">User details</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        الاسم:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">ahmed abdallah
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>Phone number:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        0021313432423
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        email:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        ahmed@gmail.com
                    </div>
                </Col>
                <div className=" d-inline px-4 border text-center pt-2">Total prise 4050 pounds</div>
                <div className="d-flex mt-2 justify-content-center">
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1  text-center px-2 w-50">
                        <option value="val">progress</option>
                        <option value="val2">processing</option>
                        <option value="val2">done</option>
                        <option value="val2">cancel</option>
                    </select>
                    <Button variant="outline-primary" className="px-3 d-inline mx-2 ">Save </Button>
                </div>
            </Row>
        </>
    )
}
export default AdminOrderDetails