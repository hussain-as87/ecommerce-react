import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBrands} from "../../Redux/Actions/BrandAction";

const IndexHomeBrandForm = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrands());
    }, []);

    const {brands,loading} = useSelector((s) => s.brands);
    return {brands,loading}
}
export default IndexHomeBrandForm