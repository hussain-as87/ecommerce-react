import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getProducts} from '../../Redux/Actions/ProductAction';

export const IndexHomeProductForm = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts({sort:"-createdAt",limit:6}));
    }, [dispatch]);

    const {products, loading} = useSelector((state) => state.products);
    return {products, loading};
};
export default IndexHomeProductForm