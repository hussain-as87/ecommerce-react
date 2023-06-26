import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductsBySold} from "../../Redux/Actions/ProductAction";

const IndexTopSoldProductsForm = () => {
    const dispatch = useDispatch()

    const {productsBySold, loading} = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProductsBySold({page:1,limit:6}))
    }, [dispatch])
    return {soldProducts:productsBySold, loadingS:loading}
}
export default IndexTopSoldProductsForm