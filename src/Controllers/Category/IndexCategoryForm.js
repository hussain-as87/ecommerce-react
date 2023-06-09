import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCategories} from "../../Redux/Actions/CategoryAction";


const IndexCategoryForm = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getCategories(12, page));
    }, [dispatch, page]);
    const {categories, loading} = useSelector((s) => s.categories);
    
    let pageCount = 0;
    if (categories.paginationResult)
        pageCount = categories.paginationResult.numberOfPages

    const getPage = async (page) => {
        console.log('page :' + page)
        await setPage(page)
    }
    return {categories, loading, pageCount, getPage};
};

export default IndexCategoryForm;
