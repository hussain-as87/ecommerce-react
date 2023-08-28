import React from 'react'
import {Spinner} from 'react-bootstrap'
import BrandCard from './BrandCardItem'
import {GetBrands} from "../../Controllers/BrandController";

const BrandFeatured = ({title, btn}) => {
    const {brands, loading} = GetBrands()
    // Check if brands.data exists before applying slice method
    const slicedBrands = brands.data ? brands.data.slice(0, 3) : [];

    return (
        <section className="banner spad">
            <div className="container">
                <div className="row">
                    {!loading ? (slicedBrands.map((brand, index) => (
                            <BrandCard brand={brand} index={index + 1} key={index}/>
                        ))) :
                        <div className="text-center"><Spinner
                            animation="border"
                            variant="secondary"
                            style={{width: '100px', height: '100px'}}
                        />
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default BrandFeatured
