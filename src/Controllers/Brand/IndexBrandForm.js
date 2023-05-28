import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getBrands} from "../../Redux/Actions/BrandAction";


const IndexBrandForm = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getBrands(12, page));
    }, [dispatch, page]);
    const {brands,loading} = useSelector((s) => s.brands);

    let pageCount = 0;
    if (brands.paginationResult)
        pageCount = brands.paginationResult.numberOfPages

    const getPage = async (page) => {
        console.log('page :' + page)
        await setPage(page)
    }
    return {brands, loading, pageCount, getPage};
};

export default IndexBrandForm;
