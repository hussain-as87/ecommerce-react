import React from 'react'
import BrandCard from './BrandCardItem'
import {Container, Row, Spinner} from 'react-bootstrap';

const BrandContainer = ({brands, loading}) => {
    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center py-2">
                <Spinner animation="border" role="status" variant="primary">
                </Spinner>
            </div>
        );
    }
    return (
        <Container>
            <div className="admin-content-text mt-2 ">All of brands</div>
            <Row className='my-1 d-flex justify-content-between'>
                {brands &&
                    brands
                        .map((brand) => (
                            <BrandCard image={brand.image}/>
                        ))}
            </Row>
        </Container>
    )
}

export default BrandContainer
