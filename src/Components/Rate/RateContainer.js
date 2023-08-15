import React from 'react'
import {Container, Row, Col, Spinner} from 'react-bootstrap'
import rate from '../../assets/images/rate.png'
import RateItem from './RateItem';
import RatePost from './RatePost';
import Pagination from "../Utility/Pagination";
import {GetReviews} from "../../Controllers/ReviewController";

const RateContainer = ({productId, product}) => {
    const {reviews, rg_loading, pageCount, getPage} = GetReviews(productId)
    return (
        <Container className='rate-container'>
            <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">Ratings</div>
                    {product?.ratingsAverageratingsAverage && (<><img className="mt-2" src={rate} alt=""
                                                                            height="16px" width="16px"/>
                            <div className="cat-rate  d-inline  p-1 pt-2">{product?.ratingsAverageratingsAverage}
                            </div>
                        </>
                    )}

                    <div className="rate-count d-inline p-1 pt-2">({product?.ratingQuantity} rate)</div>
                </Col>
            </Row>
            <RatePost/>
            {reviews?.data?.map(review =><RateItem review={review}/>)}
            {pageCount > 1 && (<Pagination pageCount={pageCount} onPress={getPage}/>)}
        </Container>
    )
}

export default RateContainer
