import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    getBannersAction, getBannerAction, createBannerAction, editBannerAction, destroyBannerAction,
} from "../Redux/Actions/BannerAction";
import avatar from "../assets/images/avatar.png";
import use_notification from "./use_notification";
import {confirmAlert} from "react-confirm-alert";
import {toast} from "react-toastify";
import {getSubcategoryByCategoryAction} from "../Redux/Actions/SubcategoryAction";

export const GetBanners = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getBannersAction({limit: 12, page}));
    }, [dispatch, page]);
    const {banners, loading} = useSelector((s) => s.banners);

    let pageCount = 0;
    if (banners.paginationResult)
        pageCount = banners.paginationResult.numberOfPages

    const getPage = async (page) => {
        console.log('page :' + page)
        await setPage(page)
    }

    return {banners, loading, pageCount, getPage};
}
export const GetBanner = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBannerAction(id));
    }, [dispatch, id]);

    const {banner, loading} = useSelector((s) => s.banners);

    return {banner, loading};
}
export const CreateBanner = () => {
    const [img, setImg] = useState(avatar);
    const [data, setData] = useState({
        title: "",
        subtitle: "",
        summary: "",
        description: ""
    });
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
    const {create, create_error, loading} = useSelector((state) => state.banners)
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("subtitle", data.subtitle);
        formData.append("summary", data.summary);
        formData.append("description", data.description);
        formData.append("image", selectedFile);
        try {
            await dispatch(createBannerAction(formData));
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
                setData({
                    title: "",
                    subtitle: "",
                    summary: "",
                    description: ""
                });
                setImg(avatar);
                setSelectedFile(null);
                setTimeout(() => setIsPress(false), 2000);
                use_notification("The banner has been created successfully! 😀", "success");
            }
        }
    }, [loading, create, create_error]);

    return {data, handleInputChange, img, handleSubmit, isPress, onChangeImage, errors};
}


export const EditBanner = (id) => {
    const [img, setImg] = useState(avatar);
    const [data, setData] = useState({
        title: "",
        subtitle: "",
        summary: "",
        description: ""
    });    const [errors, setErrors] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isPress, setIsPress] = useState(false);

    const dispatch = useDispatch();
    const {banner, banners, edit, edit_error, loading} = useSelector(
        (state) => state.banners
    );
    const currentPage = banners?.paginationResult?.currentPage


    useEffect(() => {
        dispatch(getBannerAction(id));
    }, [showModal, dispatch, id, isPress]);

    useEffect(() => {
        if (banner?.data) {
            const {title, image, subtitle, summary, description} = banner.data;
            setImg(image);
            setSelectedFile(image);
            setData((prevState) => ({
                ...prevState,
                title:title,
                description:description,
                summary:summary,
                image:image,
                subtitle:subtitle,
            }));
        }
    }, [banner]);

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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
  formData.append("title", data.title);
        formData.append("subtitle", data.subtitle);
        formData.append("summary", data.summary);
        formData.append("description", data.description);
        formData.append("image", selectedFile || "");

        dispatch(editBannerAction(id, formData));

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
            dispatch(getBannersAction({limit: 12, page: currentPage}));
            setIsPress(false)
            setShowModal(false)
            use_notification("The banner has been updated successfully!", "success");
        }
    }, [edit.status, isPress, loading]);

    return {
        data,
        handleInputChange,
        img,
        handleSubmit,
        isPress,
        onChangeImage,
        errors,
        showModal,
        setShowModal,
    };
};


export const DestroyBanner = (id) => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.banners.banners.paginationResult?.currentPage);
    const deleteHandler = (e) => {
        e.preventDefault();
        confirmAlert({
            title: "Confirm Delete",
            message: "Are you sure you want to delete this banner?",
            buttons: [
                {
                    label: "Yes",
                    onClick: async () => {
                        await dispatch(destroyBannerAction(id));
                        await dispatch(getBannersAction({limit: 12, page: 1}));
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
