import React, {useEffect} from "react";
import {Container, Row, Spinner} from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import clothe from "../../assets/images/clothe.png";
import CategoryCard from "../Category/CategoryCard"
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../Redux/Actions/CategoryAction";

const HomeCategory = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const categories = useSelector((s) => s.categories.category);
    const loading = useSelector((s) => s.categories.loading);
    console.log(loading);
    const colors = ["#FFD3E8", "#a568b7", "#55CFDF", "blue", "#e2db65"]
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
export default HomeCategory