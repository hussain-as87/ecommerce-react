import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import use_notification from "../../use_notification";
import {getCategories} from "../../../Redux/Actions/CategoryAction";
import {createSubcategory} from "../../../Redux/Actions/SubcategoryAction";

const CreateSubcategoryForm = () => {
    const [data, setData] = useState({name: "", category: ""});
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const response = useSelector(state => state.subcategories.create);
    const {create_error} = useSelector((state) => state.subcategories)

    const handlerOnChangeInput = (e) => {
        const {name, value} = e.target
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(createSubcategory(data));
            setLoading(false);
            setIsPress(true);
        } catch (error) {
            console.log(error);
        }
    };

    const {categories} = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getCategories());
        if (create_error.data?.errors) {
            setErrors(create_error.data.errors); //set errors with response data
            setIsPress(false)
        }
        if (!loading) {
            if (response && response.status === 201) {
                setData({name: "", category: ""})
                setTimeout(() => setIsPress(false), 2000);
                setLoading(true);
                use_notification("The subcategory has been created successfully! 😀", "success");
            }
        }
    }, [loading, response, dispatch, create_error]);

    return {
        data,
        handlerOnChangeInput,
        handleSubmit,
        isPress,
        categories,
        errors,
    };
};

export default CreateSubcategoryForm;
