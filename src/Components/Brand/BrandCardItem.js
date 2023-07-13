import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import avatar from "../../assets/images/image.png"
import {useState} from "react";

const BrandCardItem = ({image}) => {

    const [isImgError, setIsImgError] = useState(false);

    const handleImageError = () => {
        setIsImgError(true);
    };
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
                <Link to="/brands"> {isImgError ? (
                    <Card.Img variant="top" alt="avatar" src={avatar} style={{width: "100%", height: "151px"}}/>
                ) : (
                    <Card.Img variant="top" alt="category"
                              src={image} style={{width: "100%", height: "151px"}} onError={handleImageError}/>
                )}

                </Link>
            </Card></Col>
    )
}
export default BrandCardItem