import React from 'react';
import {Container, Row, Spinner} from 'react-bootstrap';
import CategoryCard from './../Category/CategoryCard';


const CategoryContainer = ({categories, loading}) => {
    const getRandomColor = () => {
        const colors = ["#FFD3E8", "#a568b7", "#55CFDF", "blue", "#e2db65"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    return (
        <Container>
            <div className="admin-content-text mt-2 ">All categories</div>
            <Row className='my-2 d-flex justify-content-between'>
                {loading === false ? (categories &&
                        categories
                            .map((category) => (
                                <CategoryCard key={category.id} title={category.name} img={category.image}
                                              background={getRandomColor()}/>
                            ))) :
                    <div className="d-flex justify-content-center align-items-center py-md-3 py-sm-2">
                        <Spinner animation="border" role="status" variant="primary">
                        </Spinner>
                    </div>

                }
            </Row>
        </Container>
    )
}

export default CategoryContainer;
