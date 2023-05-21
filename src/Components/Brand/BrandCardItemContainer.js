import React from 'react'
import BrandCard from './BrandCardItem'
import {Container, Row, Spinner} from 'react-bootstrap';

const BrandContainer = ({brands, loading}) => {
    return (
        <Container>
            <div className="admin-content-text mt-2 ">All of brands</div>
            <Row className='my-1 d-flex justify-content-between'>
                {loading === false ? (brands &&
                        brands
                            .map((brand) => (
                                <BrandCard image={brand.image}/>
                            ))) :
                    <div className="d-flex justify-content-center align-items-center py-md-3 py-sm-2">
                        <Spinner animation="grow" role="status" variant="secondary">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        <Spinner animation="grow" role="status" variant="secondary">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        <Spinner animation="grow" role="status" variant="secondary">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>

                }
            </Row>
        </Container>
    )
}

export default BrandContainer
