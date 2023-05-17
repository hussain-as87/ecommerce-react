import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utility/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCategories} from "../../Redux/Actions/CategoryAction";

const Categories = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getCategories(12, page));
    }, [dispatch, page]);
    const categories = useSelector((s) => s.categories.category);
    const loading = useSelector((s) => s.categories.loading);
    console.log(loading);
    let pageCount = 0;
    if (categories.paginationResult)
        pageCount = categories.paginationResult.numberOfPages

    const getPage = async (page) => {
        console.log('page :' + page)
        await setPage(page)
    }
    return (
        <div style={{minHeight: "670px"}}>
            <CategoryContainer categories={categories.data} loading={loading}/>
            {pageCount>1 &&(<Pagination pageCount={pageCount} onPress={getPage}/>)}
        </div>
    );
};
export default Categories;
