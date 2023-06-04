import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProducts} from "../../Redux/Actions/ProductAction";


const IndexProductForm = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);


    const {products, loading} = useSelector((s) => s.products);
    let pageCount = 0;
    if (products.paginationResult)
        pageCount = products.paginationResult.numberOfPages

    const getPage = async (page) => {
        console.log('page :' + page)
        await setPage(page)
    }
    useEffect(() => {
        dispatch(getProducts(12, page));
    }, [dispatch, page]);
    return {products, loading, pageCount, getPage};
};

export default IndexProductForm;