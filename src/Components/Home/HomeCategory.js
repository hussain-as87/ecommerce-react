import React from "react";
import {Container, Row, Spinner} from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import CategoryCard from "../Category/CategoryCard"
import IndexHomeCategoryForm from "../../Controllers/Category/IndexHomeCategoryForm";

const HomeCategory = () => {
    const {categories, loading, colors} = IndexHomeCategoryForm()
    return (
        <Container>
            <SubTitle title="Categories" btn="More" path="/categories"/>
            <Row className='my-2 d-flex justify-content-between'>
                {loading === false ? (categories.data &&
                        categories.data
                            .slice(0, 6) // Keep only the first 6 items
                            .map((category, index) => (
                                <CategoryCard key={category.id} title={category.name} img={category.image}
                                              background={colors[index]}/>
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
export default HomeCategory