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
                    {product?.data?.ratingsAverageratingsAverage && (<><img className="mt-2" src={rate} alt=""
                                                                            height="16px" width="16px"/>
                            <div className="cat-rate  d-inline  p-1 pt-2">{product?.data?.ratingsAverageratingsAverage}
                            </div>
                        </>
                    )}

                    <div className="rate-count d-inline p-1 pt-2">({product?.data?.ratingQuantity} rate)</div>
                </Col>
            </Row>
            <RatePost/>
            {
                !rg_loading ? (reviews.data && reviews.data.map(review => (<RateItem review={review}/>))) : (
                    <Spinner variant="primary" animation="border"></Spinner>)
            }
            {
                pageCount > 1 && (<Pagination pageCount={pageCount} onPress={getPage}/>)
            }
        </Container>
    )
}

export default RateContainer
