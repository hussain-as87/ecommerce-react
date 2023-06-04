import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getTopProducts} from '../../Redux/Actions/ProductAction';

const IndexHomeTopProductForm = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopProducts());
    }, [dispatch]);

    const TopProducts = useSelector((state) => state.products.products);
    const TopLoading = useSelector((state) => state.products.loading);

    return {TopProducts, TopLoading};
};

export default IndexHomeTopProductForm