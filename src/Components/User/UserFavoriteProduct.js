import React from 'react'
import { Row } from 'react-bootstrap';
import ProductItem from "../Product/ProductItem";
import Pagination from "../Utility/Pagination";

const UserFavoriteProduct = () => {
    return (
        <div>
            <div className="admin-content-text pb-4">Favorite list</div>
            <Row className='justify-content-start'>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </Row>
            <Pagination />
        </div>
    )
}

export default UserFavoriteProduct
