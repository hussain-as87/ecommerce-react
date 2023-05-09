import React from 'react'
import BrandCard from './BrandCardItem'
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import {Container, Row} from 'react-bootstrap';

const BrandContainer = () => {
    return (
        <Container>
            <div className="admin-content-text mt-2 ">All of brands</div>
            <Row className='my-1 d-flex justify-content-between'>
                <BrandCard image={brand1}/>
                <BrandCard image={brand2}/>
                <BrandCard image={brand3}/>
                <BrandCard image={brand2}/>
                <BrandCard image={brand1}/>
                <BrandCard image={brand3}/>
            </Row>
        </Container>
    )
}

export default BrandContainer
