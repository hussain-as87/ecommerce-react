import React from 'react'
import {Container, Row, Spinner} from 'react-bootstrap'
import SubTitle from '../Utility/SubTitle'
import BrandCard from './BrandCardItem'
import IndexHomeBrandForm from "../../Controllers/Brand/IndexHomeBrandForm";

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
                    <div className="text-center"><Spinner
                        animation="border"
                        variant="secondary"
                        style={{width: '100px', height: '100px'}}
                    />
                    </div>

                }
            </Row>
        </Container>
    )
}

export default BrandFeatured
