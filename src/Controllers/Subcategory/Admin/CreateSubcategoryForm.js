import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import use_notification from "../../use_notification";
import { getCategories } from "../../../Redux/Actions/CategoryAction";
import { createSubcategory } from "../../../Redux/Actions/SubcategoryAction";

const CreateSubcategoryForm = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
    const dispatch = useDispatch();

    const response = useSelector(state => state.subcategories.subcategories);

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeCategory = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(createSubcategory({ name, category }));
            setLoading(false);
            setIsPress(true);
        } catch (error) {
            console.log(error);
        }
    };

    const { categories } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getCategories());
        if (!loading) {
            setName("");
            setCategory("");
            setTimeout(() => setIsPress(false), 2000);
            setLoading(true);
            if (response && response.status === 201) {
                use_notification("The subcategory has been created successfully! 😀", "success");
            } else {
                use_notification("The name is required! 😔", "error");
            }
        }
    }, [loading, response, dispatch]);

    return {
        name,
        category,
        onChangeName,
        onChangeCategory,
        handleSubmit,
        isPress,
        categories,
    };
};

export default CreateSubcategoryForm;
