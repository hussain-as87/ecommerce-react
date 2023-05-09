import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';
import clothe from "../../assets/images/clothe.png";
import cat2 from "../../assets/images/cat2.png";
import labtop from "../../assets/images/labtop.png";
import sale from "../../assets/images/sale.png";
import pic from "../../assets/images/pic.png";
const CategoryContainer = () => {
    return (
        <Container >
            <div className="admin-content-text mt-2 ">All of categories</div>
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryCard title="house tools" img={clothe} background="#F4DBA4" />
                <CategoryCard title="house tools" img={cat2} background="#F4DBA4" />
                <CategoryCard title="house tools" img={labtop} background="#0034FF" />
                <CategoryCard title="house tools" img={sale} background="#F4DBA4" />
                <CategoryCard title="house tools" img={clothe} background="#FF6262" />
                <CategoryCard title="house tools" img={pic} background="#F4DBA4" />
                <CategoryCard title="house tools" img={clothe} background="#F4DBA4" />
                <CategoryCard title="house tools" img={cat2} background="#F4DBA4" />
                <CategoryCard title="house tools" img={labtop} background="#0034FF" />
                <CategoryCard title="house tools" img={sale} background="#F4DBA4" />
                <CategoryCard title="house tools" img={clothe} background="#FF6262" />
                <CategoryCard title="house tools" img={pic} background="#F4DBA4" />
                <CategoryCard title="house tools" img={clothe} background="#F4DBA4" />
                <CategoryCard title="house tools" img={cat2} background="#F4DBA4" />
                <CategoryCard title="house tools" img={labtop} background="#0034FF" />
                <CategoryCard title="house tools" img={sale} background="#F4DBA4" />
                <CategoryCard title="house tools" img={clothe} background="#FF6262" />
                <CategoryCard title="house tools" img={pic} background="#F4DBA4" />
            </Row>
        </Container>
    )
}

export default CategoryContainer
