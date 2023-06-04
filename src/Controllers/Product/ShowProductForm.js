import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../Redux/Actions/ProductAction";

const ShowProductForm = (id) => {
    const dispatch = useDispatch()

    const {product, loading} = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProduct(id))
    }, [id, dispatch])
    return {product, loading}
}
export default ShowProductForm