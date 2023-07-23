import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    getBrandsAction, getBrandAction, createBrandAction, editBrandAction, destroyBrandAction,
} from "../Redux/Actions/BrandAction";
import avatar from "../assets/images/avatar.png";
import use_notification from "./use_notification";
import {confirmAlert} from "react-confirm-alert";
import {toast} from "react-toastify";
import {editCategoryAction, getCategoriesAction, getCategoryAction} from "../Redux/Actions/CategoryAction";

export const GetBrands = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getBrandsAction({limit: 12, page}));
    }, [dispatch, page]);
    const {brands, loading} = useSelector((s) => s.brands);

    let pageCount = 0;
    if (brands.paginationResult)
        pageCount = brands.paginationResult.numberOfPages

    const getPage = async (page) => {
        console.log('page :' + page)
        await setPage(page)
    }
    const colors = ["#FFD3E8", "#a568b7", "#55CFDF", "blue", "#e2db65"]

    return {brands, loading, pageCount, getPage, colors};
}
export const GetBrand = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrandAction(id));
    }, [dispatch, id]);

    const {brand, loading} = useSelector((s) => s.brands);

    return {brand, loading};
}
export const CreateBrand = () => {
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
    const {create, create_error, loading} = useSelector((state) => state.brands)
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
            await dispatch(createBrandAction(formData));
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
                use_notification("The brand has been created successfully! 😀", "success");
            }
        }
    }, [loading, create, create_error]);

    return {name, onChangeName, img, handleSubmit, isPress, onChangeImage, errors};
}


export const EditBrand = (id) => {
    const [img, setImg] = useState(avatar);
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isPress, setIsPress] = useState(false);

    const dispatch = useDispatch();
    const {brand, brands, edit, edit_error, loading} = useSelector(
        (state) => state.brands
    );
    const currentPage = brands?.paginationResult?.currentPage


    useEffect(() => {
        dispatch(getBrandAction(id));
        dispatch(getBrandsAction({limit: 12, page: currentPage || 1}));
    }, [showModal, dispatch, id, isPress]);

    useEffect(() => {
        if (brand?.data) {
            const {name, image} = brand.data;
            setName(name);
            setImg(image);
            setSelectedFile(image);
        }
    }, [brand]);

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

        dispatch(editBrandAction(id, formData));

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
            setIsPress(false)
            setShowModal(false)
            use_notification("The brand has been updated successfully!", "success");
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


export const DestroyBrand = (id) => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.brands.brands.paginationResult?.currentPage);
    const deleteHandler = (e) => {
        e.preventDefault();
        confirmAlert({
            title: "Confirm Delete",
            message: "Are you sure you want to delete this brand?",
            buttons: [
                {
                    label: "Yes",
                    onClick: async () => {
                        await dispatch(destroyBrandAction(id));
                        await dispatch(getBrandsAction({limit: 12, page: 1}));
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
