import React from "react";
import {Container, Row} from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import clothe from "../../assets/images/clothe.png";
import cat2 from "../../assets/images/cat2.png";
import labtop from "../../assets/images/labtop.png";
import sale from "../../assets/images/sale.png";
import pic from "../../assets/images/pic.png";
import CategoryCard from "../Category/CategoryCard"

const HomeCategory = () => {
    return (<Container>
        <SubTitle title="Categories" btn="More" path="/categories"/>
        <Row className='my-2 d-flex justify-content-between'>
            <CategoryCard title="Home tools" img={clothe} background="#F4DBA4"/>
            <CategoryCard title="Home tools" img={cat2} background="#F4DBA4"/>
            <CategoryCard title="Home tools" img={labtop} background="#0034FF"/>
            <CategoryCard title="Home tools" img={sale} background="#F4DBA4"/>
            <CategoryCard title="Home tools" img={clothe} background="#FF6262"/>
            <CategoryCard title="Home tools" img={pic} background="#F4DBA4"/>
        </Row>
    </Container>)
}
export default HomeCategory