import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import IndexCategoryForm from "../../Controllers/Category/IndexCategoryForm";
import {Link} from "react-router-dom";

const CategoryHeader = ({onChangeSearch}) => {
    const {categories} = IndexCategoryForm();
    return (
        <div className="cat-header">
            <Container>
                <Row>
                    <Col className="d-flex justify-content-start py-2 flex-wrap">
                        <label className="checkbox-label cat-text-header">
                            <input
                                type="checkbox"
                                value=""
                                onClick={onChangeSearch}
                                className="checkbox-input"
                            />
                            All
                        </label>
                        {categories?.data?.map((cate) => (
                            <label key={cate._id} className="checkbox-label cat-text-header">
                                <input
                                    type="checkbox"
                                    value={`category=${cate._id}`}
                                    onClick={onChangeSearch}
                                    className="checkbox-input"
                                />
                                {cate.name}
                            </label>
                        ))}
                        <Link to="/categories" className="cat-text-header more-link">more</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CategoryHeader
