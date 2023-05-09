import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const BrandCardItem = ({image}) => {
    return (
        <Col xs="6" sm="6" md="4" lg="2" className="my-2 d-flex justify-content-center">
            <Card className="my-1"
                  style={{
                      width: "100%",
                      height: "151px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "#FFFFFF",
                  }}>
                <Link to="/brands">
                    <Card.Img variant="top" src={image} style={{width: "100%", height: "151px"}}/>
                </Link>
            </Card></Col>
    )
}
export default BrandCardItem