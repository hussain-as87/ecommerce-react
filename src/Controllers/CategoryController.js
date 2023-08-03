import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    createCategoryAction, destroyCategoryAction, editCategoryAction,
    getCategoriesAction,
    getCategoryAction
} from "../Redux/Actions/CategoryAction";
import avatar from "../assets/images/avatar.png";
import use_notification from "./use_notification";
import {confirmAlert} from "react-confirm-alert";
import {toast} from "react-toastify";

export const GetCategories = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getCategoriesAction({limit: 12, page}));
    }, [dispatch, page]);
    const {categories, loading} = useSelector((s) => s.categories);

    let pageCount = 0;
    if (categories.paginationResult)
        pageCount = categories.paginationResult.numberOfPages

    const getPage = async (page) => {
        console.log('page :' + page)
        await setPage(page)
    }
    const colors = ["#FFD3E8", "#a568b7", "#55CFDF", "blue", "#e2db65"]

    return {categories, loading, pageCount, getPage, colors};
}
export const GetCategory = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryAction(id));
    }, [dispatch, id]);

    const {category, loading} = useSelector((s) => s.categories);

    return {category, loading};
}
export const CreateCategory = () => {
    const [img, setImg] = useState(avatar);
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const [selectedFile, setSelectedFile] = useState(null);
    const [isPress, setIsPress] = useState(false);
    const dispatch = useDispatch();

    const onChangeImage = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            if (file.size > 1000000) {
                use_notification("The file size is too large! 😔", "error");
                return;
            }
            setImg(URL.createObjectURL(file));
            setSelectedFile(file);
        }
    };
    const {create, create_error, loading} = useSelector((state) => state.categories)
    const onChangeName = (e) => {
        e.preventDefault()
        setName(e.target.value);
        setErrors([])
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", selectedFile);
        try {
            await dispatch(createCategoryAction(formData));
            setIsPress(true);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (create_error.data?.errors) {
            console.log(create_error.data.errors); // Validation errors will be in the response data
            setErrors(create_error.data.errors); //set errors with response data
            setIsPress(false)
        }
        if (!loading) {
            if (create.status === 201) {
                setName("");
                setImg(avatar);
                setSelectedFile(null);
                setTimeout(() => setIsPress(false), 2000);
                use_notification("The category has been created successfully! 😀", "success");
            }
        }
    }, [loading, create, create_error]);

    return {name, onChangeName, img, handleSubmit, isPress, onChangeImage, errors};
}

export const EditCategory = (id) => {
    const [img, setImg] = useState(avatar);
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isPress, setIsPress] = useState(false);

    const dispatch = useDispatch();
    const {category, categories, edit, edit_error, loading} = useSelector(
        (state) => state.categories
    );
    const currentPage = categories?.paginationResult?.currentPage


    useEffect(() => {
        dispatch(getCategoryAction(id));
    }, [showModal, dispatch, id, isPress]);

    useEffect(() => {
        if (category?.data) {
            const {name, image} = category.data;
            setName(name);
            setImg(image);
            setSelectedFile(image);
        }
    }, [category]);

    const onChangeImage = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            if (file.size > 1000000) {
                use_notification("The file size is too large! 😔", "error");
                return;
            }
            setImg(URL.createObjectURL(file));
            setSelectedFile(file);
        }
    };

    const onChangeName = (e) => {
        e.preventDefault();
        setName(e.target.value);
        setErrors([]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name || "");
        formData.append("image", selectedFile || "");

        dispatch(editCategoryAction(id, formData));

        setIsPress(true);
    };

    useEffect(() => {
        if (edit_error?.data?.errors) {
            setErrors(edit_error.data.errors);
            setIsPress(false);
        }
    }, [edit_error?.data?.errors])

    useEffect(() => {
        if (!loading && edit.status === 200 && isPress) {
            dispatch(getCategoriesAction({limit: 12, page: currentPage}));
            setIsPress(false)
            setShowModal(false)
            use_notification("The category has been updated successfully!", "success");
        }
    }, [edit.status, isPress, loading]);

    return {
        name,
        onChangeName,
        img,
        handleSubmit,
        isPress,
        onChangeImage,
        errors,
        showModal,
        setShowModal,
    };
};


export const DestroyCategory = (id) => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.categories.categories.paginationResult?.currentPage);
    const deleteHandler = (e) => {
        e.preventDefault();
        confirmAlert({
            title: "Confirm Delete",
            message: "Are you sure you want to delete this category?",
            buttons: [
                {
                    label: "Yes",
                    onClick: async () => {
                        await dispatch(destroyCategoryAction(id));
                        await dispatch(getCategoriesAction({limit: 12, page: 1}));
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
