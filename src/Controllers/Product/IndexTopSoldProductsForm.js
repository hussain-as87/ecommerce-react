import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductsByCategory, getProductsBySold} from "../../Redux/Actions/ProductAction";

const IndexTopSoldProductsForm = () => {
    const dispatch = useDispatch()

    const {soldProducts, loadingS} = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProductsBySold({page:1,limit:6}))
    }, [dispatch])
    return {soldProducts, loadingS}
}
export default IndexTopSoldProductsForm