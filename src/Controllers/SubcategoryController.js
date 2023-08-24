import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import use_notification from "./use_notification";
import {createSubcategoryAction, getSubcategoriesAction} from "../Redux/Actions/SubcategoryAction";
import {
    destroySubcategoryAction,
    editSubcategoryAction,
    getSubcategoryAction
} from "../Redux/Actions/SubcategoryAction";
import avatar from "../assets/images/avatar.png";
import {confirmAlert} from "react-confirm-alert";
import {toast} from "react-toastify";
import {getCategoriesAction} from "../Redux/Actions/CategoryAction";
import {GetCategories} from "./CategoryController";

export const GetSubcategories = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const {subcategories, loading} = useSelector((state) => state.subcategories)
    let pageCount = 0;
    if (subcategories.paginationResult)
        pageCount = subcategories.paginationResult.numberOfPages
    const getPage = async (page) => {
        await setPage(page)
    }
    useEffect(() => {
        dispatch(getSubcategoriesAction({page: page, limit: 12}))
    }, [dispatch, page])
    return {subcategories, loading, pageCount, getPage}
}
export const GetSubcategory = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubcategoryAction(id));
    }, [dispatch, id]);

    const {category, loading} = useSelector((s) => s.categories);

    return {category, loading};
}

export const CreateSubcategory = () => {
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
            await dispatch(createSubcategoryAction(data));
            setLoading(false);
            setIsPress(true);
        } catch (error) {
            console.log(error);
        }
    };

    const {categories} = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getSubcategoriesAction({limit: 12, page: 1}));
        if (create_error.data?.errors) {
            setErrors(create_error.data.errors); //set errors with response data
            setIsPress(false)
        }
        if (!loading) {
            if (response && response.status === 201) {
                setData({name: "", category: ""})
                setTimeout(() => setIsPress(false), 2000);
                setLoading(true);
                use_notification("The subcategory has been created successfully!", "success");
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
}


export const EditSubcategory = (id) => {
    const dispatch = useDispatch();
    const { subcategory, edit, edit_error, loading } = useSelector((state) => state.subcategories);
    const currentPage = useSelector((state) => state.subcategories.subcategories.paginationResult?.currentPage);

    const [data, setData] = useState({ name: "", category: "" });
    const [isPress, setIsPress] = useState(false);
    const [errors, setErrors] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(getSubcategoryAction(id));
    }, [showModal, dispatch, id]);

    useEffect(() => {
        if (subcategory?.data) {
            const { name, category } = subcategory.data;
            setData({ name, category: category?._id });
        }
    }, [subcategory.data]);

    const handlerOnChangeInput = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await dispatch(editSubcategoryAction(id, data));
            setIsPress(true);
            await dispatch(getSubcategoriesAction({ limit: 12, page: currentPage }));
            use_notification("The subcategory has been updated successfully!", "success");
            setIsPress(false);
            setShowModal(false);
        } catch (error) {
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
            }
            setIsPress(false);
        }
    };

    const { categories } = GetCategories();

    return {
        data,
        handlerOnChangeInput,
        handleSubmit,
        isPress,
        categories,
        errors,
        showModal,
        setShowModal,
    };
};


export const DestroySubcategory = (id) => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.products.products.paginationResult?.currentPage);
    const deleteHandler = (e) => {
        e.preventDefault();
        confirmAlert({
            title: "Confirm Delete",
            message: "Are you sure you want to delete this subcategory?",
            buttons: [
                {
                    label: "Yes",
                    onClick: async () => {
                        await dispatch(destroySubcategoryAction(id));
                        await dispatch(getSubcategoriesAction({limit: 12, page: currentPage}));
                        use_notification("Successfully deleted!", "success");
                    },
                },
                {
                    label: "No",
                    onClick: () => {
                    },
                },
            ],
        });
    };

    useEffect(() => {

        return () => {
            // Cleanup notification messages
            toast.dismiss();
        };
    }, [dispatch, currentPage]);

    return {deleteHandler};
}
