import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../Redux/Actions/ProductAction';

const IndexHomeProductForm = (sort) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (sort) {
            dispatch(getProducts(undefined, undefined, sort));
        } else {
            dispatch(getProducts());
        }
    }, [dispatch, sort]);

    const { products, loading } = useSelector((state) => state.products);

    return { products, loading };
};

export default IndexHomeProductForm;
