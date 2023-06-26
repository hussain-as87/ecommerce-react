import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getProductsByCategory} from "../../Redux/Actions/ProductAction";

const IndexCategoryProductsForm = (id) => {
    const dispatch = useDispatch()

    const {productsByCategory, loading} = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProductsByCategory(id))
    }, [id, dispatch])
    return {categoryProducts:productsByCategory, loadingCP:loading}
}
export default IndexCategoryProductsForm