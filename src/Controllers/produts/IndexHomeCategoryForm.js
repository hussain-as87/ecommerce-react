import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProducts} from "../../Redux/Actions/ProductAction";

const IndexHomeCategoryForm = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const {products, loading} = useSelector((s) => s.products);

    const colors = ["#FFD3E8", "#a568b7", "#55CFDF", "blue", "#e2db65"]
    return {products,loading,colors}
}
export default IndexHomeCategoryForm