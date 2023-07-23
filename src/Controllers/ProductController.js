import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import use_notification from "./use_notification";
import {confirmAlert} from "react-confirm-alert";
import {toast} from "react-toastify";
import {
    createProductAction, destroyProductAction, editProductAction,
    getProductAction,
    getProductsAction,
    getProductsByCategoryAction,
    getProductsBySoldAction
} from "../Redux/Actions/ProductAction";
import {getSubcategoryByCategoryAction} from "../Redux/Actions/SubcategoryAction";
import {GetCategories} from "./CategoryController";
import {GetBrands} from "./BarandController";

export const GetProducts = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [keyword, setKeyword] = useState("");


    const onChangeKeyWord = (event) => {
        setKeyword(event.target.value);
    }

    const {products, loading} = useSelector((s) => s.products);
    let pageCount = 0;
    if (products?.paginationResult)
        pageCount = products?.paginationResult?.numberOfPages
    const onChangeSearch = (event) => {
        const {value, checked} = event.target;

        // Collect all checked values and construct the search string
        const checkedValues = [...document.querySelectorAll('input[type="checkbox"]:checked')]
            .map((checkbox) => checkbox.value)
            .join('&');

        // Set the search value based on the checked status
        if (checked) {
            setSearch(checkedValues ? `${checkedValues}&${value}` : value);
        } else if (value === "") {
            setSearch('')
        } else {
            setSearch(checkedValues);
        }

    };

    const onChangeSort = (value) => {
        setSort(value)
    }
    const getPage = async (page) => {
        await setPage(page)
    }
    useEffect(() => {
        let sortValue = sort !== "" ? sort : "-createdAt"

        setTimeout(async () => {
            await dispatch(getProductsAction({
                limit: 12,
                page: page,
                sort: sortValue,
                search: search,
                keyword: keyword
            }));
        }, 1000)

    }, [dispatch, keyword, page, search, sort]);
    return {
        products,
        loading,
        pageCount,
        getPage,
        search,
        onChangeSearch,
        keyword,
        onChangeKeyWord,
        sort,
        onChangeSort,
        page
    };
}
export const GetProductsByCategory = (id) => {
    const dispatch = useDispatch()

    const {productsByCategory, loading} = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProductsByCategoryAction(id))
    }, [id, dispatch])
    return {categoryProducts: productsByCategory, loadingCP: loading}
}
export const GetProductsBySold = () => {
    const dispatch = useDispatch()

    const {productsBySold, loading} = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProductsBySoldAction({page: 1, limit: 6}))
    }, [dispatch])
    return {soldProducts: productsBySold, loadingS: loading}
}
export const GetProduct = (id) => {
    const dispatch = useDispatch()

    const {product, loading} = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProductAction(id))
    }, [id, dispatch])
    return {product, loading}
}
export const CreateProduct = () => {
    const dispatch = useDispatch();
    const [images, setImages] = useState([]);
    const [isPress, setIsPress] = useState(false);
    const [errors, setErrors] = useState([]);
    const [colorPickerShow, setColorPickerShow] = useState(false);
    const [colors, setColors] = useState([]);
    const [subcategoryOptions, setSubcategoryOptions] = useState([]);
    const [data, setData] = useState({
        title: "",
        description: "",
        quantity: "",
        price: "",
        colors: [],
        imageCover: "",
        images: [],
        category: "",
        subCategory: [],
        brand: "",
    });

    const {categories} = GetCategories();
    const {brands} = GetBrands();
    const {subcategoriesByCategory} = useSelector((state) => state.subcategories);
    const {create, create_error, loading} = useSelector((state) => state.products)
    const handleCreateColors = (color) => {
        if (colors.includes(color.hex)) {
            setColorPickerShow(!colorPickerShow);
            return;
        }
        setColors((prevColors) => [...prevColors, color.hex]);
        setColorPickerShow(!colorPickerShow);
    };

    const handleRemoveColors = (color) => {
        const newColors = colors.filter((c) => c !== color);
        setColors(newColors);
    };

    const crop = {
        unit: "%",
        aspect: 4 / 3,
        width: "100",
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target

        if (value !== '' && name === 'category') {
            try {
                dispatch(getSubcategoryByCategoryAction(value));
            } catch (err) {
                console.log("Error fetching subcategories:", err);
            }
        }
        setData((prevData) => ({...prevData, [name]: value}));
    };


    useEffect(() => {
        if (data?.category !== "") {
            if (subcategoriesByCategory?.data) {
                setSubcategoryOptions(subcategoriesByCategory.data);
            }
        }
    }, [data?.category, subcategoriesByCategory?.data]);

    const handleSubcategorySelect = (selectedList) => {
        setData((prevData) => ({
            ...prevData,
            subCategory: selectedList,
        }));
    };

    const handleSubcategoryRemove = (selectedList) => {
        setData((prevData) => ({
            ...prevData,
            subCategory: selectedList,
        }));
    };


    // Convert base64 to file
    function dataURLtoFile(dataUrl, filename) {
        const arr = dataUrl.split(",");
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type: mime});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {
            title,
            description,
            quantity,
            price,
            category,
            subCategory,
            brand,
        } = data;
        const formData = new FormData();

        if (images) { // Convert base64 image to file
            const imgCover = dataURLtoFile(images[0], Math.random() + ".png");

            // Convert array of base64 images to files
            const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
                (item, index) => {
                    return dataURLtoFile(images[index], Math.random() + ".png")
                }
            )
            formData.append("imageCover", imgCover);
            itemImages.forEach((image) => formData.append("images", image));
        }

        formData.append("title", title);
        formData.append("description", description);
        formData.append("quantity", quantity);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("brand", brand);
        subCategory.forEach((subCat) =>
            formData.append("subCategory", subCat._id)
        );
        colors.map((color) => formData.append("colors", color))

        await dispatch(createProductAction(formData));
        setIsPress(true);
    };

    useEffect(() => {
        if (create_error?.data?.errors) {
            setErrors(create_error.data.errors); //set errors with response data
            setIsPress(false)
        }
        if (!loading) {
            if (create.status === 201) {
                use_notification("The product has been created successfully! 😀", "success");
                setImages([]);
                setColors([]);
                setSubcategoryOptions([]);
                setTimeout(() => setIsPress(false), 2000);
                setData({
                    title: "",
                    description: "",
                    quantity: "",
                    price: "",
                    colors: [],
                    imageCover: "",
                    images: [],
                    category: "",
                    subCategory: [],
                    brand: "",
                });
            }
        }

    }, [loading, dispatch, create, create_error]);

    return {
        data,
        handleInputChange,
        handleSubcategorySelect,
        handleSubcategoryRemove,
        setImages,
        crop,
        subcategoryOptions,
        setColorPickerShow,
        handleSubmit,
        images,
        isPress,
        handleRemoveColors,
        brands,
        categories,
        colorPickerShow,
        handleCreateColors,
        colors,
        errors
    };
}
export const EditProduct = (id) => {
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.products); // Retrieve the product data using the provided ID
    const [showModal, setShowModal] = useState(false);
    const [images, setImages] = useState([]);
    const [isPress, setIsPress] = useState(false);
    const [errors, setErrors] = useState([]);
    const [colorPickerShow, setColorPickerShow] = useState(false);
    const [colors, setColors] = useState([]);
    const [subcategoryOptions, setSubcategoryOptions] = useState([]);
    const [selectedSubcategoryOptions, setSelectedSubcategoryOptions] = useState([]);
    const [data, setData] = useState({
        title: "",
        description: "",
        quantity: "",
        price: "",
        colors: [],
        imageCover: "",
        images: [],
        category: "",
        subCategory: [],
        brand: "",
    });

    useEffect(() => {
        dispatch(getProductAction(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (product?.data) {
                setImages(product.data?.images||[]);
                setColors(product.data?.colors||[]);

            setData((prevState) => ({
                ...prevState,
                title: product.data?.title,
                description: product.data?.description,
                quantity: product.data?.quantity,
                price: product.data?.price,
                imageCover: product.data?.imageCover,
                category: product.data?.category?._id,
                brand: product.data?.brand?._id,
                subCategory: product.data?.subCategory
            }));

            setSelectedSubcategoryOptions(product?.data.subCategory || [])
        }
    }, [product])

    const {categories} = GetCategories();
    const {brands} = GetBrands();
    const {edit, edit_error, loading, products} = useSelector((state) => state.products)
    const {currentPage} = products?.paginationResult
    const {subcategoriesByCategory} = useSelector((state) => state.subcategories);

    // Retrieve subcategories from the Redux store
useEffect(()=>{
    if (data?.category) {
        dispatch(getSubcategoryByCategoryAction(data.category));
    }
    if (subcategoriesByCategory?.data) {
        setSubcategoryOptions(subcategoriesByCategory.data);
    }
},[data.category, dispatch, subcategoriesByCategory?.data])
    // Add color to the colors array

    const handleCreateColors = (color) => {
        if (colors.includes(color.hex)) {
            setColorPickerShow(!colorPickerShow);
            return;
        }
        setColors((prevColors) => [...prevColors, color.hex]);
        setColorPickerShow(!colorPickerShow);
    };

    // Remove color from the colors array
    const handleRemoveColors = (color) => {
        const newColors = colors.filter((c) => c !== color);
        setColors(newColors);
    };

    const crop = {
        unit: "%",
        aspect: 4 / 3,
        width: "100",
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target

        if (value !== '' && name === 'category') {
            try {
                dispatch(getSubcategoryByCategoryAction(value));
            } catch (err) {
                console.log("Error fetching subcategories:", err);
            }
        }
        setData((prevData) => ({...prevData, [name]: value}));
    };


    const handleSubcategorySelect = (selectedList) => {
        setData((prevData) => ({
            ...prevData,
            subCategory: selectedList,
        }));

    };

    const handleSubcategoryRemove = (selectedList) => {
        setData((prevData) => ({
            ...prevData,
            subCategory: selectedList,
        }));
    };

    // Convert base64 to a File object
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(","),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, {type: mime});
    }

    // Convert URL to a File object
    const convertURLtoFile = async (url) => {
        const response = await fetch(url, {mode: "cors"});
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = {type: `image/${ext}`};
        return new File([data], Math.random(), metadata);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {
            title,
            description,
            quantity,
            price,
            category,
            brand,
        } = data;
        const formData = new FormData();
        let imgCover;
        if (images[0].length <= 1000) {
            convertURLtoFile(images[0]).then((val) => (imgCover = val));
        } else {
            imgCover = dataURLtoFile(images[0], Math.random() + ".png");
        }

        let itemImages = [];
        // Convert array of base64 images to File objects
        Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                if (images[index].length <= 1000) {
                    convertURLtoFile(images[index]).then((val) => itemImages.push(val));
                } else {
                    itemImages.push(
                        dataURLtoFile(images[index], Math.random() + ".png")
                    );
                }
            }
        );

        formData.append("title", title);
        formData.append("description", description);
        formData.append("quantity", quantity);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("brand", brand);
        formData.append("subCategory", selectedSubcategoryOptions)

        colors.map((color) => formData.append("colors", color));

        setTimeout(() => {
            formData.append("imageCover", imgCover);
            itemImages.map((item) => formData.append("images", item));
        }, 1000);
        setTimeout(async () => {
            await dispatch(editProductAction({id, formData}));
            setIsPress(true);
        }, 1000);
    };

    useEffect(() => {
        if (edit_error.response?.data.errors) {
            setErrors(edit_error.response.data.errors); //set errors with response data
            setIsPress(false)
        }

        if (!loading && edit.status === 200 && isPress) {
            setIsPress(false)
            setShowModal(false)
            dispatch(getProductsAction({limit: 12, page: currentPage}));
            use_notification(
                "The product has been updated successfully!",
                "success");
        }
    }, [loading, dispatch, edit, id, edit_error, isPress]);

    return {
        data,
        handleInputChange,
        handleSubcategorySelect,
        handleSubcategoryRemove,
        setImages,
        crop,
        subcategoryOptions,
        setColorPickerShow,
        handleSubmit,
        images,
        isPress,
        handleRemoveColors,
        brands,
        categories,
        colorPickerShow,
        handleCreateColors,
        colors,
        errors,
        showModal,
        setShowModal,
    };

}
export const DestroyProduct = (id) => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.products.products.paginationResult?.currentPage);
    const deleteHandler = (e) => {
        e.preventDefault();
        confirmAlert({
            title: "Confirm Delete",
            message: "Are you sure you want to delete this product?",
            buttons: [
                {
                    label: "Yes",
                    onClick: async () => {
                        await dispatch(destroyProductAction(id));
                        await dispatch(getProductsAction({limit: 12, page: currentPage, sort: "-createdAt"}));
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
