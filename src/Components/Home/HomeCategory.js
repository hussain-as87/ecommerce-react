import React, {useEffect} from "react";
import {Container, Row} from "react-bootstrap";
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
    console.log(categories.data);
    console.log(loading);

    return (
        <Container>
            <SubTitle title="Categories" btn="More" path="/categories"/>
            <Row className='my-2 d-flex justify-content-between'>
                {categories &&
                    <CategoryCard title="Home tools" img={clothe} background="#F4DBA4"/>
                }
            </Row>
        </Container>
    )
}
export default HomeCategory