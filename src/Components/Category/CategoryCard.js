import React, {useState} from "react";
import {Col} from "react-bootstrap";
import avatar from "../../assets/images/image.png"
const CategoryCard = ({background, img, title}) => {
    const [isImgError, setIsImgError] = useState(false);

    const handleImageError = () => {
        setIsImgError(true);
    };
    return (<>
        <Col
            xs="6"
            sm="6"
            md="4"
            lg="2"
            className="my-4 d-flex justify-content-around ">
            <div className="allCard mb-3 ">
                <div
                    className="categoty-card "
                    style={{backgroundColor: `${background}`}}></div>
                {" "}
                {isImgError ? (
                    <img alt="avatar" src={avatar} className="categoty-card-img" />
                ) : (
                    <img
                        alt="category"
                        src={img}
                        className="categoty-card-img"
                        onError={handleImageError}
                    />
                )}
                <p className="categoty-card-text my-2">{title}</p>
            </div>
        </Col>
    </>)

}
export default CategoryCard