import React from 'react'
import BrandCard from './BrandCardItem'
import {Container, Row, Spinner} from 'react-bootstrap';

const BrandContainer = ({brands, loading}) => {
    if (loading) {
        return (
            <div className="text-center"><Spinner
                animation="border"
                variant="secondary"
                style={{width: '100px', height: '100px'}}
            />
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
