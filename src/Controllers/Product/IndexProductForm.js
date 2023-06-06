import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProducts} from "../../Redux/Actions/ProductAction";


const IndexProductForm = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");


    const {products, loading} = useSelector((s) => s.products);
    let pageCount = 0;
    if (products.paginationResult)
        pageCount = products.paginationResult.numberOfPages
    const onChangeSearch = (event) => {
        const {value, checked} = event.target;

        // Collect all checked values and construct the search string
        const checkedValues = [...document.querySelectorAll('input[type="checkbox"]:checked')]
            .map((checkbox) => checkbox.value)
            .join('&');

        // Set the search value based on the checked status
        if (checked) {
            setSearch(checkedValues ? `${checkedValues}&${value}` : value);
        } else if (value === "") {
            setSearch('')
        } else {
            setSearch(checkedValues);
        }

    };


    const onChangeSort = (value) => {
        setSort(value)
    }
    const getPage = async (page) => {
        await setPage(page)
    }
    useEffect(() => {
        let sortValue = sort !== "" ? sort : "-createdAt"
        dispatch(getProducts({limit: 12, page: page, sort: sortValue, search: search}));
    }, [dispatch, page, search, sort]);
    return {products, loading, pageCount, getPage, search, onChangeSearch, sort, onChangeSort};
};

export default IndexProductForm;
