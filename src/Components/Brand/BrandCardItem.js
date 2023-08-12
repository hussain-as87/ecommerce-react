import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import avatar from "../../assets/images/image.png"
import React, {useState} from "react";

const BrandCardItem = ({brand,index}) => {

    const [isImgError, setIsImgError] = useState(false);

    const handleImageError = () => {
        setIsImgError(true);
    };
    return (
        <div  className={`col-lg-${index === 2 ? '5' : '7'}${index === 1 ? ' offset-lg-4' : ''}`}>
            <div className={`banner__item ${index === 2 ? ' banner__item--middle' : ''}${index === 3 ? ' banner__item--last' : ''}`}>
                <div className="banner__item__pic">

                    {isImgError ? (
                        <img alt="avatar" src={avatar}/>
                    ) : (
                        <img src={`img/banner/banner-${index}.jpg`} alt="brands" onError={handleImageError}/>
                    )}
                </div>
                <div className="banner__item__text">
                    <h2>{brand.name}</h2>
                    <Link to="/brands">Shop now
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default BrandCardItem
/*  <Col xs="6" sm="6" md="4" lg="2" className="my-2 d-flex justify-content-center">
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
            </Card></Col>*/