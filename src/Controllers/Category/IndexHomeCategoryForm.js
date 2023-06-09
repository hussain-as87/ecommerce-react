import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCategories} from "../../Redux/Actions/CategoryAction";

const IndexHomeCategoryForm = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const {categories, loading} = useSelector((s) => s.categories);

    const colors = ["#FFD3E8", "#a568b7", "#55CFDF", "blue", "#e2db65"]
    return {categories,loading,colors}
}
export default IndexHomeCategoryForm