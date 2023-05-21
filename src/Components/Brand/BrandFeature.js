import React from 'react'
import {Container, Row, Spinner} from 'react-bootstrap'
import SubTitle from '../Utility/SubTitle'
import BrandCard from './BrandCardItem'
import IndexHomeBrandForm from "../../Controllers/Brand/IndexHomeBrandForm";
import CategoryCard from "../Category/CategoryCard";

const BrandFeatured = ({title, btn}) => {
    const {brands,loading} = IndexHomeBrandForm()
    // Check if brands.data exists before applying slice method
    const slicedBrands = brands.data ? brands.data.slice(0, 6) : [];

    return (
        <Container>
            <SubTitle title={title} btn={btn} path="/brands"/>
            <Row className='my-1 d-flex justify-content-between'>
                {loading === false ? (slicedBrands.map((brand) => (
                        <BrandCard image={brand.image}/>
                            ))) :
                    <div className="d-flex justify-content-center align-items-center py-md-2 py-sm-1">
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

export default BrandFeatured
